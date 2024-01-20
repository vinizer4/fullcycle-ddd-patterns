import CustomerChangeAddressEvent from "../customer-change-address.event";
import EventHandlerInterface from "../../@shared/interface/event-handler.interface";

export default class EnviaConsoleLogHandler implements EventHandlerInterface<CustomerChangeAddressEvent> {
    handle(event: CustomerChangeAddressEvent): void {
        console.log(`Endereço do cliente: ${event.eventData.id}, ${event.eventData.name} alterado para ${event.eventData.Address}`);
    }
}