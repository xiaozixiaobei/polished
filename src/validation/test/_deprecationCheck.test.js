// @flow
import deprecationCheck from '../_deprecationCheck'

jest.mock('../_deprecated', () => ({
  'module/deprecatedModule': {
    version: '3.0',
    guidance: 'You should use the %c::currentModule%c instead.',
  },
}))

describe('deprecationCheck', () => {
  beforeAll(() => {
    global.console = {
      error: jest.fn(),
      warn: jest.fn(),
      log: global.console.log,
    }
  })

  afterEach(() => {
    // eslint-disable-next-line no-console
    console.error.mockClear()
    // eslint-disable-next-line no-console
    console.warn.mockClear()
  })

  it('should throw a warning when the module is deprecated', () => {
    deprecationCheck('module/deprecatedModule')
    // eslint-disable-next-line no-console
    expect(console.warn.mock.calls).toMatchSnapshot()
    // eslint-disable-next-line no-console
    console.warn.mockClear()
  })

  it('should not throw a warning when the module is not deprecated', () => {
    deprecationCheck('module/currentModule')
    // eslint-disable-next-line no-console
    expect(console.warn.mock.calls).toMatchSnapshot()
    // eslint-disable-next-line no-console
    console.warn.mockClear()
  })
})
