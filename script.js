const form2 = {
  year: generateArrayOfYears(),
  month: generateArrayOfMonths(),
  day: generateArrayOfDays(),
  gender: ['male', 'female'],
  course: ['java', 'javascript', 'ruby', 'php', 'c#'],
}

setData = (data, id) => {
  let select = document.getElementById(id)
  let option = document.createElement('option')
  select.name = 'option'
  let j
  select.innerHTML = ''
  for (j = 0; j < data.length; j++) {
    option.innerText = data[j]
    option.value = j
    select.append(option.cloneNode(true))
  }
}
for (const obj of Object.keys(form2)) {
  setData(form2[obj], obj + 's')
}

function generateArrayOfDays(year = new Date().getFullYear(), month = 0) {
  var date = new Date(year, month, 1)
  var days = []
  var j = 1
  while (date.getMonth() === month) {
    days.push(j++)
    date.setDate(date.getDate() + 1)
  }
  return days
}

function generateArrayOfMonths() {
  month = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]
  return month
}

function generateArrayOfYears(length = 20) {
  var max = new Date().getFullYear()
  var min = max - length
  var years = []
  for (var i = max; i >= min; i--) {
    years.push(i)
  }
  return years
}

function updateDays() {
  var month = document.getElementById('months')
  var years = document.getElementById('years')
  var yearsVal = years.options[years.selectedIndex].text
  form2.day = generateArrayOfDays(parseInt(yearsVal), parseInt(month.value))
  setData(form2.day, 'days')
}
