import EventDispatcherInterface from "../interface/event-dispatcher.interface";
import EventInterface from "../interface/event.interface";
import EventHandlerInterface from "../interface/event-handler.interface";

export default class EventDispatcher implements EventDispatcherInterface {

    private eventHandlers: { [eventName: string]: EventHandlerInterface[]; } = {};

    get getEventHandlers(): { [eventName: string]: EventHandlerInterface[]; } {
        return this.eventHandlers;
    }

    register(eventName: string, eventHandler: EventHandlerInterface): void {
        if (!this.eventHandlers[eventName]) {
            this.eventHandlers[eventName] = [];
        }
        this.eventHandlers[eventName].push(eventHandler);
    }

    unregister(eventName: string, eventHandler: EventHandlerInterface): void {
    }

    unregisterAll(): void {
    }

    notify(event: EventInterface): void {
    }

}