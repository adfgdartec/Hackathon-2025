import { useParams } from 'react-router-dom';
import '../css/country-info.css'

const DetailsPage = () => {
 const { id } = useParams();
 const countryId = parseInt(id)
 return (
 <div>
 {countryId === 1 && (
 <>
 <div id="grid">
 <svg id="grid-svg" xmlns="http://www.w3.org/2000/svg" width="982" height="786" viewBox="0 0 982 786" fill="none">
 <path fillRule="evenodd" clipRule="evenodd" d="M490 401V537H348.5V401H490ZM490 785.5V676H348.5V785.5H347.5V676H206V785.5H205V676H63.5V785.5H62.5V676H0V675H62.5V538H0V537H62.5V401H0V400H62.5V258H0V257H62.5V116H0V115H62.5V0H63.5V115L205 115V0H206V115L347.5 115V0H348.5V115H490V0H491V115L627.5 115V0H628.5V115H765V0H766V115L902.5 115V0H903.5V115H982V116H903.5V257H982V258H903.5V400H982V401H903.5V537H982V538H903.5V675H982V676H903.5V785.5H902.5V676H766V785.5H765V676H628.5V785.5H627.5V676H491V785.5H490Z" fill="url(#paint0_radial_1_8)" />
 <defs>
 <radialGradient id="paint0_radial_1_8" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(491 392.75) rotate(90) scale(513.25 679.989)">
 <stop stopColor="white" stopOpacity="0.2" />
 <stop offset="1" stopColor="#000" stopOpacity="0" />
 </radialGradient>
 </defs>
 </svg>
 <div id="blur"></div>
 </div>
 
 <div id="detail-header">
 <p class="title-text">United States</p>
 </div>
 
 <h1 id="first"align="center" style={{ color: 'white'}}> Percentage of Population Without Access To Clean Water: 2.53% </h1>
 <div id="text">
 <p align="center" style={{ color: 'white' }}>The United States has made progress in providing clean water, especially in urban areas, where most Americans have access to reliable public water systems. However, challenges persist in rural areas, low-income communities, and some Native American reservations, where aging infrastructure and contamination from industrial or agricultural runoff affect water quality.</p>
 </div>
 
 <h1 align="center" style={{ color: 'white' }}>Current Solutions</h1>
 <div id="text">
 <p align="center" style={{ color: 'white' }}>To address growing health risks caused by contaminated water, the CDC Foundation supported 6 organizations, from 2023-2024, that work to increase public awareness of water, sanitation, and hygiene issues and to improve these conditions in communities with unsafe water systems.</p>
 </div>
 </>
 )}
 {countryId === 2 && (
 <>
 <div id="grid">
 <svg id="grid-svg" xmlns="http://www.w3.org/2000/svg" width="982" height="786" viewBox="0 0 982 786" fill="none">
 <path fillRule="evenodd" clipRule="evenodd" d="M490 401V537H348.5V401H490ZM490 785.5V676H348.5V785.5H347.5V676H206V785.5H205V676H63.5V785.5H62.5V676H0V675H62.5V538H0V537H62.5V401H0V400H62.5V258H0V257H62.5V116H0V115H62.5V0H63.5V115L205 115V0H206V115L347.5 115V0H348.5V115H490V0H491V115L627.5 115V0H628.5V115H765V0H766V115L902.5 115V0H903.5V115H982V116H903.5V257H982V258H903.5V400H982V401H903.5V537H982V538H903.5V675H982V676H903.5V785.5H902.5V676H766V785.5H765V676H628.5V785.5H627.5V676H491V785.5H490Z" fill="url(#paint0_radial_1_8)" />
 <defs>
 <radialGradient id="paint0_radial_1_8" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(491 392.75) rotate(90) scale(513.25 679.989)">
 <stop stopColor="white" stopOpacity="0.2" />
 <stop offset="1" stopColor="#000" stopOpacity="0" />
 </radialGradient>
 </defs>
 </svg>
 <div id="blur"></div>
 </div>
 
 <div id="detail-header">
 <p class="title-text">Guatemala</p>

 </div>
 
 <h1 id="first" align="center" style={{ color: 'white' }}> Percentage of Population Without Access To Clean Water: 43.71% </h1>
 <div id="text">
 <p align="center" style={{ color: 'white' }}>Access to safe water in Guatemala remains a major issue, especially in rural areas where over 60% of the population relies on unsafe water sources, increasing the risk of waterborne diseases. While urban areas have seen some improvements, rural communities often lack proper water treatment and distribution infrastructure.
    Water quality is further compromised by pollution from industrial activities and agricultural runoff. Despite efforts by NGOs to provide water purification and sanitation education, Guatemala's social and economic challenges hinder large-scale solutions, making access to safe water a persistent problem.</p>
 </div>
 
 <h1 align="center" style={{ color: 'white' }}>Current Solutions</h1>
 <div id="text">
 <p align="center" style={{ color: 'white' }}>The Guatemala Clean Water Project was founded to help the shortage of water supply due to dried springs in rapidly growing villages. The project is to install a system with a 20 year life that includes four spring boxes, a distribution tank, and a 9,200 meter conveyance line. Approximately 714 people, more than 500 children, will benefit. [5]</p>
 </div>
 </>
 )}
 {countryId === 3 && (
 <>
 <div id="grid">
 <svg id="grid-svg" xmlns="http://www.w3.org/2000/svg" width="982" height="786" viewBox="0 0 982 786" fill="none">
 <path fillRule="evenodd" clipRule="evenodd" d="M490 401V537H348.5V401H490ZM490 785.5V676H348.5V785.5H347.5V676H206V785.5H205V676H63.5V785.5H62.5V676H0V675H62.5V538H0V537H62.5V401H0V400H62.5V258H0V257H62.5V116H0V115H62.5V0H63.5V115L205 115V0H206V115L347.5 115V0H348.5V115H490V0H491V115L627.5 115V0H628.5V115H765V0H766V115L902.5 115V0H903.5V115H982V116H903.5V257H982V258H903.5V400H982V401H903.5V537H982V538H903.5V675H982V676H903.5V785.5H902.5V676H766V785.5H765V676H628.5V785.5H627.5V676H491V785.5H490Z" fill="url(#paint0_radial_1_8)" />
 <defs>
 <radialGradient id="paint0_radial_1_8" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(491 392.75) rotate(90) scale(513.25 679.989)">
 <stop stopColor="white" stopOpacity="0.2" />
 <stop offset="1" stopColor="#000" stopOpacity="0" />
 </radialGradient>
 </defs>
 </svg>
 <div id="blur"></div>
 </div>
 
 <div id="detail-header">
 <p class="title-text">Peru</p>
 </div>
 
 <h1  id="first" align="center" style={{ color: 'white' }}> Percentage of Population Without Access To Clean Water: 48.01% </h1>
 <div id="text">
 <p align="center" style={{ color: 'white' }}>In Peru, access to clean water has improved in urban areas like Lima, but rural and marginalized regions still face significant challenges. Nearly one in four Peruvians in rural areas lack safe water, and remote communities often deal with unreliable or contaminated water sources.
    The government has made efforts to expand infrastructure and improve water quality, but challenges like limited funding, geographic barriers, and pollution from mining and agriculture persist. Addressing these issues will require continued collaboration with international organizations and local communities to ensure more equitable access to clean water nationwide.</p>
 </div>
 
 <h1 align="center" style={{ color: 'white' }}>Current Solutions</h1>
 <div id="text">
 <p align="center" style={{ color: 'white' }}>One government initiative is the National Rural Water and Sanitation Program (PRONASAR). The aim is to increase access to basic sanitation facilities in rural areas. Their goal is to reach 70% access nationaly.</p>
 </div>
 </>
 )}
 {countryId === 4 && (
 <>
 
 <div id="grid">
 <svg id="grid-svg" xmlns="http://www.w3.org/2000/svg" width="982" height="786" viewBox="0 0 982 786" fill="none">
 <path fillRule="evenodd" clipRule="evenodd" d="M490 401V537H348.5V401H490ZM490 785.5V676H348.5V785.5H347.5V676H206V785.5H205V676H63.5V785.5H62.5V676H0V675H62.5V538H0V537H62.5V401H0V400H62.5V258H0V257H62.5V116H0V115H62.5V0H63.5V115L205 115V0H206V115L347.5 115V0H348.5V115H490V0H491V115L627.5 115V0H628.5V115H765V0H766V115L902.5 115V0H903.5V115H982V116H903.5V257H982V258H903.5V400H982V401H903.5V537H982V538H903.5V675H982V676H903.5V785.5H902.5V676H766V785.5H765V676H628.5V785.5H627.5V676H491V785.5H490Z" fill="url(#paint0_radial_1_8)" />
 <defs>
 <radialGradient id="paint0_radial_1_8" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(491 392.75) rotate(90) scale(513.25 679.989)">
 <stop stopColor="white" stopOpacity="0.2" />
 <stop offset="1" stopColor="#000" stopOpacity="0" />
 </radialGradient>
 </defs>
 </svg>
 <div id="blur"></div>
 </div>
 
 <div id="detail-header">
 <p class="title-text">Paraguay</p>
 </div>
 
 <h1 id="first" align="center" style={{ color: 'white' }}> Percentage of Population Without Access To Clean Water: 35.79% </h1>
 <div id="text">
 <p align="center" style={{ color: 'white' }}>In Paraguay, urban areas have reliable access to clean water, but rural and indigenous communities struggle with unsafe water. Contamination from agricultural runoff, pesticides, and untreated sewage pollutes water sources, leading to health risks.
    Progress is slowed by limited funding, geographic isolation, and climate change, which exacerbates water shortages. Agricultural practices, including cattle ranching, also contribute to water pollution. Addressing these issues requires better infrastructure, sanitation, and environmental protections.</p>
 </div>
 
 <h1 align="center" style={{ color: 'white' }}>Current Solutions</h1>
 <div id="text">
 <p align="center" style={{ color: 'white' }}>Paraguay has programs like the Drinking Water and Sanitation Project for Small Towns and Rural and Indigenous Communities to increase access in underfunded communities by building sanitation infrastructure.</p>
 </div>
 </>
 )}
 {countryId === 5 && (
 <>
 
 <div id="grid">
 <svg id="grid-svg" xmlns="http://www.w3.org/2000/svg" width="982" height="786" viewBox="0 0 982 786" fill="none">
 <path fillRule="evenodd" clipRule="evenodd" d="M490 401V537H348.5V401H490ZM490 785.5V676H348.5V785.5H347.5V676H206V785.5H205V676H63.5V785.5H62.5V676H0V675H62.5V538H0V537H62.5V401H0V400H62.5V258H0V257H62.5V116H0V115H62.5V0H63.5V115L205 115V0H206V115L347.5 115V0H348.5V115H490V0H491V115L627.5 115V0H628.5V115H765V0H766V115L902.5 115V0H903.5V115H982V116H903.5V257H982V258H903.5V400H982V401H903.5V537H982V538H903.5V675H982V676H903.5V785.5H902.5V676H766V785.5H765V676H628.5V785.5H627.5V676H491V785.5H490Z" fill="url(#paint0_radial_1_8)" />
 <defs>
 <radialGradient id="paint0_radial_1_8" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(491 392.75) rotate(90) scale(513.25 679.989)">
 <stop stopColor="white" stopOpacity="0.2" />
 <stop offset="1" stopColor="#000" stopOpacity="0" />
 </radialGradient>
 </defs>
 </svg>
 <div id="blur"></div>
 </div>
 
 <div id="detail-header">
 <p class="title-text">Algeria</p>
 </div>
 
 <h1 id="first" align="center" style={{ color: 'white' }}> Percentage of Population Without Access To Clean Water: 29.4% </h1>
 <div id="text">
 <p align="center" style={{ color: 'white' }}>In Algeria, urban areas like Algiers have reliable access to clean water, but many rural and desert regions face significant challenges. These areas rely on contaminated groundwater, wells, and reservoirs, with pollution from agriculture and industry. Over-extraction of groundwater has also led to depletion in some regions, worsened by the country's arid climate.
    The government has invested in desalination plants to address water shortages, especially along the coast. However, issues like inefficient water distribution, pollution from mining, and aging infrastructure continue to hinder clean water access. Sustainable water management and expanded infrastructure are crucial for improving access, particularly in rural areas.</p>
 </div>
 
 <h1  align="center" style={{ color: 'white' }}>Current Solutions</h1>
 <div id="text">
 <p align="center" style={{ color: 'white' }}>Algeria is addressing their water scarcity problem through innovative solutions using desalination and wastewater recycling. Algeria currently had 15 seawater desalination plants as of 2011 [6]</p>
 </div>
 </>
 )}
 {countryId === 6 && (
 <>
 
 <div id="grid">
 <svg id="grid-svg" xmlns="http://www.w3.org/2000/svg" width="982" height="786" viewBox="0 0 982 786" fill="none">
 <path fillRule="evenodd" clipRule="evenodd" d="M490 401V537H348.5V401H490ZM490 785.5V676H348.5V785.5H347.5V676H206V785.5H205V676H63.5V785.5H62.5V676H0V675H62.5V538H0V537H62.5V401H0V400H62.5V258H0V257H62.5V116H0V115H62.5V0H63.5V115L205 115V0H206V115L347.5 115V0H348.5V115H490V0H491V115L627.5 115V0H628.5V115H765V0H766V115L902.5 115V0H903.5V115H982V116H903.5V257H982V258H903.5V400H982V401H903.5V537H982V538H903.5V675H982V676H903.5V785.5H902.5V676H766V785.5H765V676H628.5V785.5H627.5V676H491V785.5H490Z" fill="url(#paint0_radial_1_8)" />
 <defs>
 <radialGradient id="paint0_radial_1_8" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(491 392.75) rotate(90) scale(513.25 679.989)">
 <stop stopColor="white" stopOpacity="0.2" />
 <stop offset="1" stopColor="#000" stopOpacity="0" />
 </radialGradient>
 </defs>
 </svg>
 <div id="blur"></div>
 </div>
 
 <div id="detail-header">
 <p class="title-text">Central African Republic</p>
 </div>
 
 <h1 id="first" align="center" style={{ color: 'white' }}> Percentage of Population Without Access To Clean Water: 93.87% </h1>
 <div id="text">
 <p align="center" style={{ color: 'white' }}>In the Central African Republic, access to clean water is limited, especially in rural and conflict-affected areas. Many communities rely on contaminated rivers and wells due to poor infrastructure and sanitation, with ongoing conflict further disrupting water supply systems.
    Efforts to improve access, including the construction of wells, have been made with international support. However, political instability, limited resources, and inadequate sanitation continue to hinder progress. Addressing these issues requires better infrastructure, water management, and hygiene education.</p>
 </div>
 
 <h1 align="center" style={{ color: 'white' }}>Current Solutions</h1>
 <div id="text">
 <p align="center" style={{ color: 'white' }}>The Central African Republic focuses their efforts to improve access to safe water by drilling new boreholes, rehabilitating existing water points, and promoting hygiene practices.</p>
 </div>
 </>
 )}
 {countryId === 7 && (
 <>
 
 
 <div id="grid">
 <svg id="grid-svg" xmlns="http://www.w3.org/2000/svg" width="982" height="786" viewBox="0 0 982 786" fill="none">
 <path fillRule="evenodd" clipRule="evenodd" d="M490 401V537H348.5V401H490ZM490 785.5V676H348.5V785.5H347.5V676H206V785.5H205V676H63.5V785.5H62.5V676H0V675H62.5V538H0V537H62.5V401H0V400H62.5V258H0V257H62.5V116H0V115H62.5V0H63.5V115L205 115V0H206V115L347.5 115V0H348.5V115H490V0H491V115L627.5 115V0H628.5V115H765V0H766V115L902.5 115V0H903.5V115H982V116H903.5V257H982V258H903.5V400H982V401H903.5V537H982V538H903.5V675H982V676H903.5V785.5H902.5V676H766V785.5H765V676H628.5V785.5H627.5V676H491V785.5H490Z" fill="url(#paint0_radial_1_8)" />
 <defs>
 <radialGradient id="paint0_radial_1_8" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(491 392.75) rotate(90) scale(513.25 679.989)">
 <stop stopColor="white" stopOpacity="0.2" />
 <stop offset="1" stopColor="#000" stopOpacity="0" />
 </radialGradient>
 </defs>
 </svg>
 <div id="blur"></div>
 </div>
 
 <div id="detail-header">
 <p class="title-text">Madagascar</p>
 </div>
 
 <h1 id="first" align="center" style={{ color: 'white' }}> Percentage of Population Without Access To Clean Water: 77.76% </h1>
 <div id="text">
 <p align="center" style={{ color: 'white' }}>In Madagascar, access to clean water is a major issue, especially in rural areas where many rely on contaminated rivers and wells. While urban centers have better access, poor sanitation contributes to waterborne diseases in these regions.
    Efforts to improve water access, such as building wells and providing sanitation education, have been made with international support. However, limited resources, droughts, and climate change challenges continue to impede progress, requiring more investment in infrastructure and water management.</p>
 </div>
 
 <h1 align="center" style={{ color: 'white' }}>Current Solutions</h1>
 <div id="text">
 <p align="center" style={{ color: 'white' }}>The Milo Rano project in Madagascar provides drinking water to rural households in southern Madagascar. It uses solar powered water supply systems to reduce demand for nonrenewable biomass.[7]</p>
 </div>
 </>
 )}
 {countryId === 8 && (
 <>
 
 
 <div id="grid">
 <svg id="grid-svg" xmlns="http://www.w3.org/2000/svg" width="982" height="786" viewBox="0 0 982 786" fill="none">
 <path fillRule="evenodd" clipRule="evenodd" d="M490 401V537H348.5V401H490ZM490 785.5V676H348.5V785.5H347.5V676H206V785.5H205V676H63.5V785.5H62.5V676H0V675H62.5V538H0V537H62.5V401H0V400H62.5V258H0V257H62.5V116H0V115H62.5V0H63.5V115L205 115V0H206V115L347.5 115V0H348.5V115H490V0H491V115L627.5 115V0H628.5V115H765V0H766V115L902.5 115V0H903.5V115H982V116H903.5V257H982V258H903.5V400H982V401H903.5V537H982V538H903.5V675H982V676H903.5V785.5H902.5V676H766V785.5H765V676H628.5V785.5H627.5V676H491V785.5H490Z" fill="url(#paint0_radial_1_8)" />
 <defs>
 <radialGradient id="paint0_radial_1_8" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(491 392.75) rotate(90) scale(513.25 679.989)">
 <stop stopColor="white" stopOpacity="0.2" />
 <stop offset="1" stopColor="#000" stopOpacity="0" />
 </radialGradient>
 </defs>
 </svg>
 <div id="blur"></div>
 </div>
 
 <div id="detail-header">
 <p class="title-text">Ethiopia</p>
 </div>
 
 <h1 id="first" align="center" style={{ color: 'white' }}> Percentage of Population Without Access To Clean Water: 86.76% </h1>
 <div id="text">
 <p align="center" style={{ color: 'white' }}>In Ethiopia, access to clean water has improved in urban areas, but many rural communities still lack reliable sources. About 60% of the rural population depends on unsafe water sources, leading to waterborne diseases like cholera and dysentery, which pose significant health risks.
    The government, with international support, has expanded water infrastructure, but challenges like drought, population growth, and limited resources hinder progress. Addressing these issues requires continued investment in water systems, sanitation, and community education to improve public health.</p>
 </div>
 
 <h1 align="center" style={{ color: 'white' }}>Current Solutions</h1>
 <div id="text">
 <p align="center" style={{ color: 'white' }}>Ethiopia is making many efforts to to establish clean water practices. From significant agronomic soil and water conservations practices to programs like the One WASH National Programme. [8]</p>
 </div>
 </>
 )}
 {countryId === 9 && (
 <>
 
 
 <div id="grid">
 <svg id="grid-svg" xmlns="http://www.w3.org/2000/svg" width="982" height="786" viewBox="0 0 982 786" fill="none">
 <path fillRule="evenodd" clipRule="evenodd" d="M490 401V537H348.5V401H490ZM490 785.5V676H348.5V785.5H347.5V676H206V785.5H205V676H63.5V785.5H62.5V676H0V675H62.5V538H0V537H62.5V401H0V400H62.5V258H0V257H62.5V116H0V115H62.5V0H63.5V115L205 115V0H206V115L347.5 115V0H348.5V115H490V0H491V115L627.5 115V0H628.5V115H765V0H766V115L902.5 115V0H903.5V115H982V116H903.5V257H982V258H903.5V400H982V401H903.5V537H982V538H903.5V675H982V676H903.5V785.5H902.5V676H766V785.5H765V676H628.5V785.5H627.5V676H491V785.5H490Z" fill="url(#paint0_radial_1_8)" />
 <defs>
 <radialGradient id="paint0_radial_1_8" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(491 392.75) rotate(90) scale(513.25 679.989)">
 <stop stopColor="white" stopOpacity="0.2" />
 <stop offset="1" stopColor="#000" stopOpacity="0" />
 </radialGradient>
 </defs>
 </svg>
 <div id="blur"></div>
 </div>
 
 <div id="detail-header">
 <p class="title-text">Pakistan</p>
 </div>
 
 <h1 id="first" align="center" style={{ color: 'white' }}> Percentage of Population Without Access To Clean Water: 49.4% </h1>
 <div id="text">
 <p align="center" style={{ color: 'white' }}>Pakistan faces major challenges in clean water access, with around 20 million people lacking reliable safe drinking water. Poor water quality, caused by contamination from sanitation issues, industrial pollution, and agricultural runoff, is common, especially in rural areas. Waterborne diseases like cholera and dysentery are widespread, exacerbated by climate change and population growth, which affect water availability.
    While the government has attempted to improve water access through various projects, progress has been slow, especially in rural regions. Aging infrastructure and limited water treatment facilities hinder improvements. Despite efforts like rainwater harvesting and groundwater recharge, Pakistan still faces a serious water crisis, requiring more sustainable solutions for long-term access to clean water.</p>
 </div>
 
 <h1 align="center" style={{ color: 'white' }}>Current Solutions</h1>
 <div id="text">
 <p align="center" style={{ color: 'white' }}>Pakistan established the National Water Policy in 2018. It provides the framework for sustainable water management, including addressing water management and improving water quality [9].</p>
 </div>
 </>
 )}
 {countryId === 10 && (
 <>
 
 
 <div id="grid">
 <svg id="grid-svg" xmlns="http://www.w3.org/2000/svg" width="982" height="786" viewBox="0 0 982 786" fill="none">
 <path fillRule="evenodd" clipRule="evenodd" d="M490 401V537H348.5V401H490ZM490 785.5V676H348.5V785.5H347.5V676H206V785.5H205V676H63.5V785.5H62.5V676H0V675H62.5V538H0V537H62.5V401H0V400H62.5V258H0V257H62.5V116H0V115H62.5V0H63.5V115L205 115V0H206V115L347.5 115V0H348.5V115H490V0H491V115L627.5 115V0H628.5V115H765V0H766V115L902.5 115V0H903.5V115H982V116H903.5V257H982V258H903.5V400H982V401H903.5V537H982V538H903.5V675H982V676H903.5V785.5H902.5V676H766V785.5H765V676H628.5V785.5H627.5V676H491V785.5H490Z" fill="url(#paint0_radial_1_8)" />
 <defs>
 <radialGradient id="paint0_radial_1_8" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(491 392.75) rotate(90) scale(513.25 679.989)">
 <stop stopColor="white" stopOpacity="0.2" />
 <stop offset="1" stopColor="#000" stopOpacity="0" />
 </radialGradient>
 </defs>
 </svg>
 <div id="blur"></div>
 </div>
 
 <div id="detail-header">
 <p class="title-text">Uzbekistan</p>
 </div>
 
 <h1 id="first" align="center" style={{ color: 'white' }}> Percentage of Population Without Access To Clean Water: 20.15% </h1>
 <div id="text">
 <p align="center" style={{ color: 'white' }}>Uzbekistan has made progress in improving access to clean water, with modern water treatment plants and expanded networks in urban areas. These efforts have significantly increased water access in cities and some rural regions, with international cooperation supporting these advancements.
    However, challenges persist, particularly in rural areas where access remains limited, and outdated infrastructure continues to be a problem. Overuse of water resources, particularly in agriculture, and the ongoing crisis of the shrinking Aral Sea, threaten the country's water security, making sustainable access a continuing challenge.</p>
 </div>
 
 <h1 align="center" style={{ color: 'white' }}>Current Solutions</h1>
 <div id="text">
 <p align="center" style={{ color: 'white' }}>Uzbekistan is improving access to safe water through a multi-step approach that includes canal concreting, water-saving technologies, and modernizing water infrastructure. [10]</p>
 </div>
 </>
 )}
 {countryId === 11 && (
 <>
 
 
 <div id="grid">
 <svg id="grid-svg" xmlns="http://www.w3.org/2000/svg" width="982" height="786" viewBox="0 0 982 786" fill="none">
 <path fillRule="evenodd" clipRule="evenodd" d="M490 401V537H348.5V401H490ZM490 785.5V676H348.5V785.5H347.5V676H206V785.5H205V676H63.5V785.5H62.5V676H0V675H62.5V538H0V537H62.5V401H0V400H62.5V258H0V257H62.5V116H0V115H62.5V0H63.5V115L205 115V0H206V115L347.5 115V0H348.5V115H490V0H491V115L627.5 115V0H628.5V115H765V0H766V115L902.5 115V0H903.5V115H982V116H903.5V257H982V258H903.5V400H982V401H903.5V537H982V538H903.5V675H982V676H903.5V785.5H902.5V676H766V785.5H765V676H628.5V785.5H627.5V676H491V785.5H490Z" fill="url(#paint0_radial_1_8)" />
 <defs>
 <radialGradient id="paint0_radial_1_8" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(491 392.75) rotate(90) scale(513.25 679.989)">
 <stop stopColor="white" stopOpacity="0.2" />
 <stop offset="1" stopColor="#000" stopOpacity="0" />
 </radialGradient>
 </defs>
 </svg>
 <div id="blur"></div>
 </div>
 
 <div id="detail-header">
 <p class="title-text">Indonesia</p>
 </div>
 
 <h1 id="first" align="center" style={{ color: 'white' }}> Percentage of Population Without Access To Clean Water: 69.73% </h1>
 <div id="text">
 <p align="center" style={{ color: 'white' }}>Indonesia faces significant water insecurity due to uneven water distribution, pollution, and inadequate infrastructure. While urban areas experience strained supply systems, many rural regions lack access to clean water, with contamination from agriculture, industry, and poor sanitation posing health risks.
    The government has made efforts to improve water access, but climate change, frequent droughts, and floods complicate the situation. Despite progress, rapid urbanization and environmental challenges mean water insecurity remains a critical issue that requires ongoing investment and sustainable solutions.</p>
 </div>
 
 <h1 align="center" style={{ color: 'white' }}>Current Solutions</h1>
 <div id="text">
 <p align="center" style={{ color: 'white' }}>Indonesia is trying to improve access to safe water through a community approach with government programs like PAMSIMAS and SANIMAS.WHO Indonesia implemented 2 drinking water providers who had advanced sanitation systems. [11]</p>
 </div>
 </>
 )}
 {countryId === 12 && (
 <>
 
 
 <div id="grid">
 <svg id="grid-svg" xmlns="http://www.w3.org/2000/svg" width="982" height="786" viewBox="0 0 982 786" fill="none">
 <path fillRule="evenodd" clipRule="evenodd" d="M490 401V537H348.5V401H490ZM490 785.5V676H348.5V785.5H347.5V676H206V785.5H205V676H63.5V785.5H62.5V676H0V675H62.5V538H0V537H62.5V401H0V400H62.5V258H0V257H62.5V116H0V115H62.5V0H63.5V115L205 115V0H206V115L347.5 115V0H348.5V115H490V0H491V115L627.5 115V0H628.5V115H765V0H766V115L902.5 115V0H903.5V115H982V116H903.5V257H982V258H903.5V400H982V401H903.5V537H982V538H903.5V675H982V676H903.5V785.5H902.5V676H766V785.5H765V676H628.5V785.5H627.5V676H491V785.5H490Z" fill="url(#paint0_radial_1_8)" />
 <defs>
 <radialGradient id="paint0_radial_1_8" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(491 392.75) rotate(90) scale(513.25 679.989)">
 <stop stopColor="white" stopOpacity="0.2" />
 <stop offset="1" stopColor="#000" stopOpacity="0" />
 </radialGradient>
 </defs>
 </svg>
 <div id="blur"></div>
 </div>
 
 <div id="detail-header">
 <p class="title-text">France</p>
 </div>
 
 <h1 id="first" align="center" style={{ color: 'white' }}> Percentage of Population Without Access To Clean Water: 0.3% </h1>
 <div id="text">
 <p align="center" style={{ color: 'white' }}>France has reliable access to clean water, with 99% of the population benefiting from high-quality drinking water due to well-developed infrastructure and effective regulations. Both urban and rural areas have good water supply systems, ensuring safe water for most citizens.
    However, challenges exist, particularly in agriculture, which uses a significant amount of water. Over-extraction and climate change, leading to more frequent droughts, threaten water availability, especially in southern regions. These factors highlight the need for continued investment in sustainable water management practices.</p>
 </div>
 
 <h1 align="center" style={{ color: 'white' }}>Current Solutions</h1>
 <div id="text">
 <p align="center" style={{ color: 'white' }}>France has one of the most advanced and efficient water sanitation systems. France’s “Water Plan” was presented by the President of France in 2023 and promised to face the challenges posed by climate change and guarantee quality water to all. [12]</p>
 </div>
 </>
 )}
 
 </div>
 );
};

export default DetailsPage;