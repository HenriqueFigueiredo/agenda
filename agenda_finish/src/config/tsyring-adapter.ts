import { IocAdapter, ClassConstructor, Action } from 'routing-controllers'
import { DependencyContainer } from 'tsyringe'

export class TsyringeAdapter implements IocAdapter {
    constructor(
        private readonly container: DependencyContainer) { }

    get<T>(someClass: ClassConstructor<T>, action?: Action): T {
        const childContainer = this.container.createChildContainer()

        return childContainer.resolve<T>(someClass)
    }
}