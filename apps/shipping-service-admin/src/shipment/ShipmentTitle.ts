import { Shipment as TShipment } from "../api/shipment/Shipment";

export const SHIPMENT_TITLE_FIELD = "name";

export const ShipmentTitle = (record: TShipment): string => {
  return record.name?.toString() || String(record.id);
};
