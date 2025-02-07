import { useEffect, useState } from "react";

interface Shipment {
  orderId: string;
  trackingNumber: string;
  carrier: string;
  labelUrl: string;
  status: string;
}

export default function OrderDetails({ orderId }: { orderId: string }) {
  const [shipment, setShipment] = useState<Shipment | null>(null);

  useEffect(() => {
    async function fetchShipment() {
      const res = await fetch(`/api/shipment/${orderId}`);
      const data = await res.json();
      setShipment(data.shipment);
    }
    fetchShipment();
  }, [orderId]);

  return (
    <div className="p-4 border rounded shadow">
      <h2 className="text-lg font-bold">Shipment Details</h2>
      {shipment ? (
        <div>
          <p>Tracking Number: {shipment.trackingNumber}</p>
          <p>Carrier: {shipment.carrier}</p>
          <p>Status: {shipment.status}</p>
          <a href={shipment.labelUrl} target="_blank" className="text-blue-500 underline">
            Download Shipping Label
          </a>
        </div>
      ) : (
        <p>Loading shipment details...</p>
      )}
    </div>
  );
}
