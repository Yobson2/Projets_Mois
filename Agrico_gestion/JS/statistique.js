// Données pour le graphique
const data = {
    labels: [
      "Nombre de personnes",
      "Nombre de fonctions"
    ],
    datasets: [
      {
        data: [50, 30],
        backgroundColor: [
          "#FF6384",
          "#36A2EB"
        ],
        hoverBackgroundColor: [
          "#FF6384",
          "#36A2EB"
        ]
      }
    ]
  };
  
  // Création du graphique
  const ctx = document.getElementById("myChart").getContext("2d");
  const myChart = new Chart(ctx, {
    type: 'doughnut',
    data: data,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        position: 'right',
      },
      animation: {
        animateScale: true,
        animateRotate: true
      }
    }
  });
  