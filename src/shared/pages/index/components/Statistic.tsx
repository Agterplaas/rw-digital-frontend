import statisticImage from '/images/svg/statistic_image.svg';
import Highcharts from 'highcharts';
import HighchartsAccessibility from 'highcharts/modules/accessibility';
import HighchartsExporting from 'highcharts/modules/exporting';
import HighchartsReact from 'highcharts-react-official';

const data = [
  {
    name: 'Percentage',
    colorByPoint: true,
    data: [
      {
        name: 'Balita',
        y: 45.8
      },
      {
        name: 'Anak - anak',
        y: 29.2
      },
      {
        name: 'Remaja',
        y: 8.3
      },
      {
        name: 'Dewasa',
        y: 8.3
      },
      {
        name: 'Lansia',
        y: 8.3
      }
    ]
  }
];

const options = {
  chart: {
    type: 'pie',
    width: 900,
    height: 479,
    borderRadius: 16
  },
  colors: ['#3266CC', '#990099', '#109717', '#FE9900', '#DC3812'],
  title: {
    text: 'Statistic Umur Warga 12',
    align: 'left',
    x: 30,
    y: 50,
    style: {
      fontSize: 24,
      fontWeight: 600
    }
  },
  subtitle: {
    text: 'Total warga RW 12 sebanyak 500 Jiwa ●',
    floating: true,
    align: 'right',
    verticalAlign: 'bottom',
    x: -50,
    y: -20,
    style: {
      fontWeight: 600,
      fontSize: '1em',
      color: '#BD0101'
    }
  },
  plotOptions: {
    pie: {
      center: [670, 160],
      showInLegend: true,
      size: '70%',
      dataLabels: {
        enabled: true,
        distance: -40,
        format: '{point.percentage:.1f}%',
        style: {
          fontSize: '.9em',
          textOutline: 'none',
          opacity: 0.7,
          color: 'white'
        }
      }
    }
  },
  series: data,
  legend: {
    align: 'left',
    layout: 'vertical',
    verticalAlign: 'top',
    floating: true,
    y: 80,
    x: 20,
    symbolHeight: 19,
    symbolWidth: 19,
    itemDistance: 20,
    itemMarginBottom: 10,
    symbolPadding: 20,
    symbolRadius: 0,
    itemStyle: {
      fontSize: 20,
      fontWeight: 600
    }
  },
  credits: {
    enabled: false
  },
  exporting: {
    buttons: {
      contextButton: {
        y: 25,
        x: -30
      }
    }
  }
};

function Statistic() {
  if (typeof Highcharts === 'object') {
    HighchartsAccessibility(Highcharts);
    HighchartsExporting(Highcharts);
  }

  return (
    <div className="flex w-5/6 items-center">
      <div className="flex-1">
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
      <div className="">
        <img src={statisticImage} />
      </div>
    </div>
  );
}

export default Statistic;
