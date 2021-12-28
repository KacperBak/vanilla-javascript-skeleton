
const data = [
  {x:'2016-12-24', s1: 0, s1lim: 3, s2: 0, s2lim: 3, s3: 0, s3lim: 3}, 
  {x:'2016-12-25', s1: 0, s1lim: 3, s2: 0.5, s2lim: 3, s3: 1, s3lim: 3}, 
  {x:'2016-12-26', s1: 1, s1lim: 3, s2: 0.5, s2lim: 3, s3: 1.25, s3lim: 3}, 
  {x:'2016-12-27', s1: 2, s1lim: 3, s2: 0.5, s2lim: 3, s3: 2.5, s3lim: 3}, 
  {x:'2016-12-28', s1: 3, s1lim: 3, s2: 3.15, s2lim: 3, s3: 3.75, s3lim: 3}
]
const cfg1 = {
  type: 'line',
  data: {
    datasets: [{
      label: 'S1',
      data: data,
      borderColor: 'rgb(18, 134, 135)',
      tension: 0.2,
      parsing: {
        yAxisKey: 's1'
      }
    }, {
      label: 'S1 Limit',
      data: data,
      borderColor: 'rgb(173, 181, 189)',
      parsing: {
        yAxisKey: 's1lim'
      }
    }]
  }
};

const cfg2 = {
  type: 'line',
  data: {
    datasets: [{
      label: 'S2',
      data: data,
      borderColor: 'rgb(18, 134, 135)',
      tension: 0.2,
      parsing: {
        yAxisKey: 's2'
      }
    }, {
      label: 'S2 Limit',
      data: data,
      borderColor: 'rgb(255, 193, 7)',
      parsing: {
        yAxisKey: 's2lim'
      }
    }]
  }
};

const cfg3 = {
  type: 'line',
  data: {
    datasets: [{
      label: 'S3',
      data: data,
      borderColor: 'rgb(18, 134, 135)',
      tension: 0.1,
      parsing: {
        yAxisKey: 's3'
      }
    }, {
      label: 'S3 Limit',
      data: data,
      borderColor: 'rgb(255, 0, 0)',
      parsing: {
        yAxisKey: 's3lim'
      }
    }]
  }
};

const chartS1 = new Chart(
  document.getElementById('chartS1'),
  cfg1
);

const chartS2 = new Chart(
  document.getElementById('chartS2'),
  cfg2
);

const chartS3 = new Chart(
  document.getElementById('chartS3'),
  cfg3
);

console.log("Hello Chart.js");