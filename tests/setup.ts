import { config } from '@vue/test-utils'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// ResizeObserver не существует в jsdom — мокаем
global.ResizeObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}))

const vuetify = createVuetify({ components, directives })

// Регистрируем Vuetify глобально для ВСЕХ тестов
config.global.plugins = [vuetify]
config.global.stubs = {
  transition: false,
  'transition-group': false,
}