import EventDispatcherInterface from "../interface/event-dispatcher.interface";
import EventInterface from "../interface/event.interface";
import EventHandlerInterface from "../interface/event-handler.interface";

export default class EventDispatcher implements EventDispatcherInterface {

    register(eventName: string, eventHandler: EventHandlerInterface): void {

    }

    unregister(eventName: string, eventHandler: EventHandlerInterface): void {
    }

    unregisterAll(): void {
    }

    notify(event: EventInterface): void {
    }

}