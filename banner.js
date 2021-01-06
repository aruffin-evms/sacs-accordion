
let siblingElement = document.querySelector('.breadcrumb')

let newElementTag = document.createElement('p')
let newElementText = document.createTextNode('Due to the continued impact of the COVID-19 pandemic, this practicum will be on hiatus for the 2021-2022 academic year. We hope to reinstate the practicum for 2022-2023. Please check back in fall 2021 for updates.')

if(window.location.href === 'https://www.evms.edu/emergency_medicine/fellowships/emergency_medicine_physician_assistant_postgraduate_practicum/') {
  newElementTag.appendChild(newElementText)
  newElementTag.style.cssText = 'font-weight: bold; font-size: 24px; color: white; height: auto; padding: 30px 50px; background-color: #1f7F98; text-align: left;'
  
  siblingElement.after(newElementTag)
}