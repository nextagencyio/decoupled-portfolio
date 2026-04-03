/**
 * Typed client with full route query support for all content types.
 *
 * Run `npx decoupled-cli schema sync` after connecting to a Drupal space
 * to regenerate schema files (types.ts, schema.graphql, introspection.json).
 */

import type { DecoupledClient } from 'decoupled-client'
import type { DrupalNode } from 'decoupled-client'
import type { QueryOptions } from 'decoupled-client'
import { GET_NODE_BY_PATH } from '@/lib/queries'

// Placeholder types -- sync-schema will replace with actual content types
export type ContentNode = DrupalNode
export type ContentTypeName = string

export interface ContentTypeMap {
  [key: string]: DrupalNode
}

export interface TypedClient {
  getEntries<K extends ContentTypeName>(type: K, options?: QueryOptions): Promise<DrupalNode[]>
  getEntry<K extends ContentTypeName>(type: K, id: string): Promise<DrupalNode | null>
  getEntryByPath(path: string): Promise<ContentNode | null>
  raw<T = any>(query: string, variables?: Record<string, any>): Promise<T>
}

// Factory -- uses GET_NODE_BY_PATH which covers all content types
export function createTypedClient(client: DecoupledClient): TypedClient {
  return {
    async getEntries() { return [] },
    async getEntry() { return null },
    async getEntryByPath(path) {
      return client.queryByPath(path, GET_NODE_BY_PATH)
    },
    async raw(query, variables) { return client.query(query, variables) },
  }
}
