import common from './common'

export const TYPE = 'PE_URL'

export const process = (tuples) => {
    return tuples.reduce(
        (entity, tuple) => {
            const type = tuple[0]
            const value = tuple[1]
            switch (type) {
                case 1001:
                    entity.url1 = value
                    break
                case 1000:
                    entity.url2 = value
                    break
                default:
                    Object.assign(entity, common(type, value))
                    break
            }
            return entity
        },
        {
            type: TYPE,
        },
    )
}

export default { TYPE, process }
