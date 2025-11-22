# File: Dockerfile.ws (in the root of your monorepo)

# ---------------------------------------------------
# 1. Base setup with pnpm
# ---------------------------------------------------
FROM node:20-alpine AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

# ---------------------------------------------------
# 2. Prune the workspace (isolate the app)
# ---------------------------------------------------
FROM base AS builder
WORKDIR /app
RUN pnpm add -g turbo
COPY . .
# CRITICAL: Using the confirmed package name 'ws-backend'
RUN turbo prune ws-backend --docker

# ---------------------------------------------------
# 3. Install dependencies & Build
# ---------------------------------------------------
FROM base AS installer
WORKDIR /app

# Copy lockfile and package.json's of isolated sub-workspace
COPY --from=builder /app/out/json/ .
RUN --mount=type=cache,target=/root/.pnpm-store pnpm install --frozen-lockfile

# Copy source code of isolated sub-workspace
COPY --from=builder /app/out/full/ .

# Generate Prisma Client (Needed if WS also uses the DB package)
# Pin to version 5
RUN pnpm dlx prisma@5 generate --schema=./packages/db/prisma/schema.prisma

# Build the project for the WS service
RUN pnpm turbo build --filter=ws-backend...

# ---------------------------------------------------
# 4. Production Runner
# ---------------------------------------------------
FROM base AS runner
WORKDIR /app
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 wsuser
USER wsuser

COPY --from=installer --chown=wsuser:nodejs /app .

# Expose the port (CONFIRMED: 3002)
EXPOSE 3002

# Command to start the app
CMD ["node", "apps/Ws-backend/dist/index.js"]