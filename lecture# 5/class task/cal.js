  function calculateCosts() {
      const unitCosts = document.querySelectorAll('.unit-cost');
      const quantities = document.querySelectorAll('.quantity');
      const costs = document.querySelectorAll('.cost');
      let total = 0;

      unitCosts.forEach((unitCost, index) => {
        const quantity = quantities[index].value;
        const cost = unitCost.value * quantity;
        costs[index].value = cost;
        total += cost;
      });

      const gst = total * 0.15;
      const grandTotal = total + gst;

      document.getElementById('total').value = total;
      document.getElementById('gst').value = gst.toFixed(2);
      document.getElementById('grand-total').value = grandTotal.toFixed(2);
    }