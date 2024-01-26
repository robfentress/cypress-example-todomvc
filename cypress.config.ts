import { defineConfig } from 'cypress'
import { cypressConfig } from '@axe-core/watcher'

export default defineConfig(
  cypressConfig({
    fixturesFolder: false,
    e2e: {
      setupNodeEvents(on, config) {},
      baseUrl: 'http://localhost:8888',
    },
    axe: {
      apiKey: '3c096082-f186-4978-b768-af21f50b0043',
      serverURL: 'https://axe.deque.com'
    },
    defaultCommandTimeout: 10000
  })
)
// {
//   fixturesFolder: false,
//   e2e: {
//     setupNodeEvents(on, config) {},
//     baseUrl: 'http://localhost:8888',
//   }
// }