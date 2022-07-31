import {Environment, Path} from 'enums'

describe('Enums', () => {
  test('export default', async () => {
    const enums = (await import('enums')).default

    expect(enums).toMatchSnapshot()
  })

  test('enum Environment', async () => {
    expect('development' as Environment).toStrictEqual(Environment.DEVELOPMENT)
    expect('test' as Environment).toStrictEqual(Environment.TEST)
    expect('qa' as Environment).toStrictEqual(Environment.QA)
    expect('alpha' as Environment).toStrictEqual(Environment.ALPHA)
    expect('beta' as Environment).toStrictEqual(Environment.BETA)
    expect('uat' as Environment).toStrictEqual(Environment.UAT)
    expect('stage' as Environment).toStrictEqual(Environment.STAGE)
    expect('production' as Environment).toStrictEqual(Environment.PRODUCTION)
    expect('demo' as Environment).toStrictEqual(Environment.DEMO)
    expect(Environment).toMatchSnapshot()
  })

  test('enum Path', async () => {
    expect('/' as Path).toStrictEqual(Path.INDEX)
    expect('/auth' as Path).toStrictEqual(Path.AUTH)
    expect(Path).toMatchSnapshot()
  })
})
