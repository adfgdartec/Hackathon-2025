import { useParams } from 'react-router-dom';
import '../css/country-info.css'

const DetailsPage = () => {
    const { id } = useParams();
    const countryId = parseInt(id)
    return (
        <div>
            {countryId === 1 && (
            <>
            <div className="grid">
                <svg className="grid-svg" xmlns="http://www.w3.org/2000/svg" width="982" height="786" viewBox="0 0 982 786" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M490 401V537H348.5V401H490ZM490 785.5V676H348.5V785.5H347.5V676H206V785.5H205V676H63.5V785.5H62.5V676H0V675H62.5V538H0V537H62.5V401H0V400H62.5V258H0V257H62.5V116H0V115H62.5V0H63.5V115L205 115V0H206V115L347.5 115V0H348.5V115H490V0H491V115L627.5 115V0H628.5V115H765V0H766V115L902.5 115V0H903.5V115H982V116H903.5V257H982V258H903.5V400H982V401H903.5V537H982V538H903.5V675H982V676H903.5V785.5H902.5V676H766V785.5H765V676H628.5V785.5H627.5V676H491V785.5H490Z" fill="url(#paint0_radial_1_8)" />
                    <defs>
                        <radialGradient id="paint0_radial_1_8" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(491 392.75) rotate(90) scale(513.25 679.989)">
                            <stop stopColor="white" stopOpacity="0.2" />
                            <stop offset="1" stopColor="#000" stopOpacity="0" />
                        </radialGradient>
                    </defs>
                </svg>
                <div className="blur"></div>
            </div>
            
            <div className="title">
                <p class="title-text">United</p>
                <p class="title-text">States</p>
            </div>
            
            <h1 align="center" style={{ color: 'white' }}> Percentage of Population Without Access To Clean Water: 2.53% </h1>
            <div className="text">
                <p align="center" style={{ color: 'white' }}>The United States has made progress in providing clean water, especially in urban areas, where most Americans have access to reliable public water systems. However, challenges persist in rural areas, low-income communities, and some Native American reservations, where aging infrastructure and contamination from industrial or agricultural runoff affect water quality...</p>
            </div>
            
            <h1 align="center" style={{ color: 'white' }}>Current Solutions</h1>
            <div className="text">
                <p align="center" style={{ color: 'white' }}>To address growing health risks caused by contaminated water, the CDC Foundation supported 6 organizations, from 2023-2024, that work to increase public awareness of water, sanitation, and hygiene issues and to improve these conditions in communities with unsafe water systems.</p>
            </div>
            </>
            )}
            {countryId === 2 && (
            <>
            <div className="grid">
                <svg className="grid-svg" xmlns="http://www.w3.org/2000/svg" width="982" height="786" viewBox="0 0 982 786" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M490 401V537H348.5V401H490ZM490 785.5V676H348.5V785.5H347.5V676H206V785.5H205V676H63.5V785.5H62.5V676H0V675H62.5V538H0V537H62.5V401H0V400H62.5V258H0V257H62.5V116H0V115H62.5V0H63.5V115L205 115V0H206V115L347.5 115V0H348.5V115H490V0H491V115L627.5 115V0H628.5V115H765V0H766V115L902.5 115V0H903.5V115H982V116H903.5V257H982V258H903.5V400H982V401H903.5V537H982V538H903.5V675H982V676H903.5V785.5H902.5V676H766V785.5H765V676H628.5V785.5H627.5V676H491V785.5H490Z" fill="url(#paint0_radial_1_8)" />
                    <defs>
                        <radialGradient id="paint0_radial_1_8" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(491 392.75) rotate(90) scale(513.25 679.989)">
                            <stop stopColor="white" stopOpacity="0.2" />
                            <stop offset="1" stopColor="#000" stopOpacity="0" />
                        </radialGradient>
                    </defs>
                </svg>
                <div className="blur"></div>
            </div>
            
            <div className="title">
                <p class="title-text">United</p>
                <p class="title-text">States</p>
            </div>
            
            <h1 align="center" style={{ color: 'white' }}> Percentage of Population Without Access To Clean Water: 2.53% </h1>
            <div className="text">
                <p align="center" style={{ color: 'white' }}>The United States has made progress in providing clean water, especially in urban areas, where most Americans have access to reliable public water systems. However, challenges persist in rural areas, low-income communities, and some Native American reservations, where aging infrastructure and contamination from industrial or agricultural runoff affect water quality...</p>
            </div>
            
            <h1 align="center" style={{ color: 'white' }}>Current Solutions</h1>
            <div className="text">
                <p align="center" style={{ color: 'white' }}>To address growing health risks caused by contaminated water, the CDC Foundation supported 6 organizations, from 2023-2024, that work to increase public awareness of water, sanitation, and hygiene issues and to improve these conditions in communities with unsafe water systems.</p>
            </div>
            </>
            )}
            {countryId === 3 && (
            <>
            <div className="grid">
                <svg className="grid-svg" xmlns="http://www.w3.org/2000/svg" width="982" height="786" viewBox="0 0 982 786" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M490 401V537H348.5V401H490ZM490 785.5V676H348.5V785.5H347.5V676H206V785.5H205V676H63.5V785.5H62.5V676H0V675H62.5V538H0V537H62.5V401H0V400H62.5V258H0V257H62.5V116H0V115H62.5V0H63.5V115L205 115V0H206V115L347.5 115V0H348.5V115H490V0H491V115L627.5 115V0H628.5V115H765V0H766V115L902.5 115V0H903.5V115H982V116H903.5V257H982V258H903.5V400H982V401H903.5V537H982V538H903.5V675H982V676H903.5V785.5H902.5V676H766V785.5H765V676H628.5V785.5H627.5V676H491V785.5H490Z" fill="url(#paint0_radial_1_8)" />
                    <defs>
                        <radialGradient id="paint0_radial_1_8" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(491 392.75) rotate(90) scale(513.25 679.989)">
                            <stop stopColor="white" stopOpacity="0.2" />
                            <stop offset="1" stopColor="#000" stopOpacity="0" />
                        </radialGradient>
                    </defs>
                </svg>
                <div className="blur"></div>
            </div>
            
            <div className="title">
                <p class="title-text">United</p>
                <p class="title-text">States</p>
            </div>
            
            <h1 align="center" style={{ color: 'white' }}> Percentage of Population Without Access To Clean Water: 2.53% </h1>
            <div className="text">
                <p align="center" style={{ color: 'white' }}>The United States has made progress in providing clean water, especially in urban areas, where most Americans have access to reliable public water systems. However, challenges persist in rural areas, low-income communities, and some Native American reservations, where aging infrastructure and contamination from industrial or agricultural runoff affect water quality...</p>
            </div>
            
            <h1 align="center" style={{ color: 'white' }}>Current Solutions</h1>
            <div className="text">
                <p align="center" style={{ color: 'white' }}>To address growing health risks caused by contaminated water, the CDC Foundation supported 6 organizations, from 2023-2024, that work to increase public awareness of water, sanitation, and hygiene issues and to improve these conditions in communities with unsafe water systems.</p>
            </div>
            </>
            )}
            {countryId === 4 && (
            <>
            
            <div className="grid">
                <svg className="grid-svg" xmlns="http://www.w3.org/2000/svg" width="982" height="786" viewBox="0 0 982 786" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M490 401V537H348.5V401H490ZM490 785.5V676H348.5V785.5H347.5V676H206V785.5H205V676H63.5V785.5H62.5V676H0V675H62.5V538H0V537H62.5V401H0V400H62.5V258H0V257H62.5V116H0V115H62.5V0H63.5V115L205 115V0H206V115L347.5 115V0H348.5V115H490V0H491V115L627.5 115V0H628.5V115H765V0H766V115L902.5 115V0H903.5V115H982V116H903.5V257H982V258H903.5V400H982V401H903.5V537H982V538H903.5V675H982V676H903.5V785.5H902.5V676H766V785.5H765V676H628.5V785.5H627.5V676H491V785.5H490Z" fill="url(#paint0_radial_1_8)" />
                    <defs>
                        <radialGradient id="paint0_radial_1_8" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(491 392.75) rotate(90) scale(513.25 679.989)">
                            <stop stopColor="white" stopOpacity="0.2" />
                            <stop offset="1" stopColor="#000" stopOpacity="0" />
                        </radialGradient>
                    </defs>
                </svg>
                <div className="blur"></div>
            </div>
            
            <div className="title">
                <p class="title-text">United</p>
                <p class="title-text">States</p>
            </div>
            
            <h1 align="center" style={{ color: 'white' }}> Percentage of Population Without Access To Clean Water: 2.53% </h1>
            <div className="text">
                <p align="center" style={{ color: 'white' }}>The United States has made progress in providing clean water, especially in urban areas, where most Americans have access to reliable public water systems. However, challenges persist in rural areas, low-income communities, and some Native American reservations, where aging infrastructure and contamination from industrial or agricultural runoff affect water quality...</p>
            </div>
            
            <h1 align="center" style={{ color: 'white' }}>Current Solutions</h1>
            <div className="text">
                <p align="center" style={{ color: 'white' }}>To address growing health risks caused by contaminated water, the CDC Foundation supported 6 organizations, from 2023-2024, that work to increase public awareness of water, sanitation, and hygiene issues and to improve these conditions in communities with unsafe water systems.</p>
            </div>
            </>
            )}
            {countryId === 5 && (
            <>
            
            <div className="grid">
                <svg className="grid-svg" xmlns="http://www.w3.org/2000/svg" width="982" height="786" viewBox="0 0 982 786" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M490 401V537H348.5V401H490ZM490 785.5V676H348.5V785.5H347.5V676H206V785.5H205V676H63.5V785.5H62.5V676H0V675H62.5V538H0V537H62.5V401H0V400H62.5V258H0V257H62.5V116H0V115H62.5V0H63.5V115L205 115V0H206V115L347.5 115V0H348.5V115H490V0H491V115L627.5 115V0H628.5V115H765V0H766V115L902.5 115V0H903.5V115H982V116H903.5V257H982V258H903.5V400H982V401H903.5V537H982V538H903.5V675H982V676H903.5V785.5H902.5V676H766V785.5H765V676H628.5V785.5H627.5V676H491V785.5H490Z" fill="url(#paint0_radial_1_8)" />
                    <defs>
                        <radialGradient id="paint0_radial_1_8" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(491 392.75) rotate(90) scale(513.25 679.989)">
                            <stop stopColor="white" stopOpacity="0.2" />
                            <stop offset="1" stopColor="#000" stopOpacity="0" />
                        </radialGradient>
                    </defs>
                </svg>
                <div className="blur"></div>
            </div>
            
            <div className="title">
                <p class="title-text">United</p>
                <p class="title-text">States</p>
            </div>
            
            <h1 align="center" style={{ color: 'white' }}> Percentage of Population Without Access To Clean Water: 2.53% </h1>
            <div className="text">
                <p align="center" style={{ color: 'white' }}>The United States has made progress in providing clean water, especially in urban areas, where most Americans have access to reliable public water systems. However, challenges persist in rural areas, low-income communities, and some Native American reservations, where aging infrastructure and contamination from industrial or agricultural runoff affect water quality...</p>
            </div>
            
            <h1 align="center" style={{ color: 'white' }}>Current Solutions</h1>
            <div className="text">
                <p align="center" style={{ color: 'white' }}>To address growing health risks caused by contaminated water, the CDC Foundation supported 6 organizations, from 2023-2024, that work to increase public awareness of water, sanitation, and hygiene issues and to improve these conditions in communities with unsafe water systems.</p>
            </div>
            </>
            )}
            {countryId === 6 && (
            <>
            
            <div className="grid">
                <svg className="grid-svg" xmlns="http://www.w3.org/2000/svg" width="982" height="786" viewBox="0 0 982 786" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M490 401V537H348.5V401H490ZM490 785.5V676H348.5V785.5H347.5V676H206V785.5H205V676H63.5V785.5H62.5V676H0V675H62.5V538H0V537H62.5V401H0V400H62.5V258H0V257H62.5V116H0V115H62.5V0H63.5V115L205 115V0H206V115L347.5 115V0H348.5V115H490V0H491V115L627.5 115V0H628.5V115H765V0H766V115L902.5 115V0H903.5V115H982V116H903.5V257H982V258H903.5V400H982V401H903.5V537H982V538H903.5V675H982V676H903.5V785.5H902.5V676H766V785.5H765V676H628.5V785.5H627.5V676H491V785.5H490Z" fill="url(#paint0_radial_1_8)" />
                    <defs>
                        <radialGradient id="paint0_radial_1_8" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(491 392.75) rotate(90) scale(513.25 679.989)">
                            <stop stopColor="white" stopOpacity="0.2" />
                            <stop offset="1" stopColor="#000" stopOpacity="0" />
                        </radialGradient>
                    </defs>
                </svg>
                <div className="blur"></div>
            </div>
            
            <div className="title">
                <p class="title-text">United</p>
                <p class="title-text">States</p>
            </div>
            
            <h1 align="center" style={{ color: 'white' }}> Percentage of Population Without Access To Clean Water: 2.53% </h1>
            <div className="text">
                <p align="center" style={{ color: 'white' }}>The United States has made progress in providing clean water, especially in urban areas, where most Americans have access to reliable public water systems. However, challenges persist in rural areas, low-income communities, and some Native American reservations, where aging infrastructure and contamination from industrial or agricultural runoff affect water quality...</p>
            </div>
            
            <h1 align="center" style={{ color: 'white' }}>Current Solutions</h1>
            <div className="text">
                <p align="center" style={{ color: 'white' }}>To address growing health risks caused by contaminated water, the CDC Foundation supported 6 organizations, from 2023-2024, that work to increase public awareness of water, sanitation, and hygiene issues and to improve these conditions in communities with unsafe water systems.</p>
            </div>
            </>
            )}
            {countryId === 7 && (
            <>
           
            
            <div className="grid">
                <svg className="grid-svg" xmlns="http://www.w3.org/2000/svg" width="982" height="786" viewBox="0 0 982 786" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M490 401V537H348.5V401H490ZM490 785.5V676H348.5V785.5H347.5V676H206V785.5H205V676H63.5V785.5H62.5V676H0V675H62.5V538H0V537H62.5V401H0V400H62.5V258H0V257H62.5V116H0V115H62.5V0H63.5V115L205 115V0H206V115L347.5 115V0H348.5V115H490V0H491V115L627.5 115V0H628.5V115H765V0H766V115L902.5 115V0H903.5V115H982V116H903.5V257H982V258H903.5V400H982V401H903.5V537H982V538H903.5V675H982V676H903.5V785.5H902.5V676H766V785.5H765V676H628.5V785.5H627.5V676H491V785.5H490Z" fill="url(#paint0_radial_1_8)" />
                    <defs>
                        <radialGradient id="paint0_radial_1_8" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(491 392.75) rotate(90) scale(513.25 679.989)">
                            <stop stopColor="white" stopOpacity="0.2" />
                            <stop offset="1" stopColor="#000" stopOpacity="0" />
                        </radialGradient>
                    </defs>
                </svg>
                <div className="blur"></div>
            </div>
            
            <div className="title">
                <p class="title-text">Madagascar</p>
            </div>
            
            <h1 align="center" style={{ color: 'white' }}> Percentage of Population Without Access To Clean Water: 2.53% </h1>
            <div className="text">
                <p align="center" style={{ color: 'white' }}>The United States has made progress in providing clean water, especially in urban areas, where most Americans have access to reliable public water systems. However, challenges persist in rural areas, low-income communities, and some Native American reservations, where aging infrastructure and contamination from industrial or agricultural runoff affect water quality...</p>
            </div>
            
            <h1 align="center" style={{ color: 'white' }}>Current Solutions</h1>
            <div className="text">
                <p align="center" style={{ color: 'white' }}>To address growing health risks caused by contaminated water, the CDC Foundation supported 6 organizations, from 2023-2024, that work to increase public awareness of water, sanitation, and hygiene issues and to improve these conditions in communities with unsafe water systems.</p>
            </div>
            </>
            )}
            {countryId === 8 && (
            <>
           
            
            <div className="grid">
                <svg className="grid-svg" xmlns="http://www.w3.org/2000/svg" width="982" height="786" viewBox="0 0 982 786" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M490 401V537H348.5V401H490ZM490 785.5V676H348.5V785.5H347.5V676H206V785.5H205V676H63.5V785.5H62.5V676H0V675H62.5V538H0V537H62.5V401H0V400H62.5V258H0V257H62.5V116H0V115H62.5V0H63.5V115L205 115V0H206V115L347.5 115V0H348.5V115H490V0H491V115L627.5 115V0H628.5V115H765V0H766V115L902.5 115V0H903.5V115H982V116H903.5V257H982V258H903.5V400H982V401H903.5V537H982V538H903.5V675H982V676H903.5V785.5H902.5V676H766V785.5H765V676H628.5V785.5H627.5V676H491V785.5H490Z" fill="url(#paint0_radial_1_8)" />
                    <defs>
                        <radialGradient id="paint0_radial_1_8" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(491 392.75) rotate(90) scale(513.25 679.989)">
                            <stop stopColor="white" stopOpacity="0.2" />
                            <stop offset="1" stopColor="#000" stopOpacity="0" />
                        </radialGradient>
                    </defs>
                </svg>
                <div className="blur"></div>
            </div>
            
            <div className="title">
                <p class="title-text">United</p>
                <p class="title-text">States</p>
            </div>
            
            <h1 align="center" style={{ color: 'white' }}> Percentage of Population Without Access To Clean Water: 2.53% </h1>
            <div className="text">
                <p align="center" style={{ color: 'white' }}>The United States has made progress in providing clean water, especially in urban areas, where most Americans have access to reliable public water systems. However, challenges persist in rural areas, low-income communities, and some Native American reservations, where aging infrastructure and contamination from industrial or agricultural runoff affect water quality...</p>
            </div>
            
            <h1 align="center" style={{ color: 'white' }}>Current Solutions</h1>
            <div className="text">
                <p align="center" style={{ color: 'white' }}>To address growing health risks caused by contaminated water, the CDC Foundation supported 6 organizations, from 2023-2024, that work to increase public awareness of water, sanitation, and hygiene issues and to improve these conditions in communities with unsafe water systems.</p>
            </div>
            </>
            )}
            {countryId === 9 && (
            <>
           
            
            <div className="grid">
                <svg className="grid-svg" xmlns="http://www.w3.org/2000/svg" width="982" height="786" viewBox="0 0 982 786" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M490 401V537H348.5V401H490ZM490 785.5V676H348.5V785.5H347.5V676H206V785.5H205V676H63.5V785.5H62.5V676H0V675H62.5V538H0V537H62.5V401H0V400H62.5V258H0V257H62.5V116H0V115H62.5V0H63.5V115L205 115V0H206V115L347.5 115V0H348.5V115H490V0H491V115L627.5 115V0H628.5V115H765V0H766V115L902.5 115V0H903.5V115H982V116H903.5V257H982V258H903.5V400H982V401H903.5V537H982V538H903.5V675H982V676H903.5V785.5H902.5V676H766V785.5H765V676H628.5V785.5H627.5V676H491V785.5H490Z" fill="url(#paint0_radial_1_8)" />
                    <defs>
                        <radialGradient id="paint0_radial_1_8" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(491 392.75) rotate(90) scale(513.25 679.989)">
                            <stop stopColor="white" stopOpacity="0.2" />
                            <stop offset="1" stopColor="#000" stopOpacity="0" />
                        </radialGradient>
                    </defs>
                </svg>
                <div className="blur"></div>
            </div>
            
            <div className="title">
                <p class="title-text">United</p>
                <p class="title-text">States</p>
            </div>
            
            <h1 align="center" style={{ color: 'white' }}> Percentage of Population Without Access To Clean Water: 2.53% </h1>
            <div className="text">
                <p align="center" style={{ color: 'white' }}>The United States has made progress in providing clean water, especially in urban areas, where most Americans have access to reliable public water systems. However, challenges persist in rural areas, low-income communities, and some Native American reservations, where aging infrastructure and contamination from industrial or agricultural runoff affect water quality...</p>
            </div>
            
            <h1 align="center" style={{ color: 'white' }}>Current Solutions</h1>
            <div className="text">
                <p align="center" style={{ color: 'white' }}>To address growing health risks caused by contaminated water, the CDC Foundation supported 6 organizations, from 2023-2024, that work to increase public awareness of water, sanitation, and hygiene issues and to improve these conditions in communities with unsafe water systems.</p>
            </div>
            </>
            )}
            {countryId === 10 && (
            <>
           
            
            <div className="grid">
                <svg className="grid-svg" xmlns="http://www.w3.org/2000/svg" width="982" height="786" viewBox="0 0 982 786" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M490 401V537H348.5V401H490ZM490 785.5V676H348.5V785.5H347.5V676H206V785.5H205V676H63.5V785.5H62.5V676H0V675H62.5V538H0V537H62.5V401H0V400H62.5V258H0V257H62.5V116H0V115H62.5V0H63.5V115L205 115V0H206V115L347.5 115V0H348.5V115H490V0H491V115L627.5 115V0H628.5V115H765V0H766V115L902.5 115V0H903.5V115H982V116H903.5V257H982V258H903.5V400H982V401H903.5V537H982V538H903.5V675H982V676H903.5V785.5H902.5V676H766V785.5H765V676H628.5V785.5H627.5V676H491V785.5H490Z" fill="url(#paint0_radial_1_8)" />
                    <defs>
                        <radialGradient id="paint0_radial_1_8" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(491 392.75) rotate(90) scale(513.25 679.989)">
                            <stop stopColor="white" stopOpacity="0.2" />
                            <stop offset="1" stopColor="#000" stopOpacity="0" />
                        </radialGradient>
                    </defs>
                </svg>
                <div className="blur"></div>
            </div>
            
            <div className="title">
                <p class="title-text">United</p>
                <p class="title-text">States</p>
            </div>
            
            <h1 align="center" style={{ color: 'white' }}> Percentage of Population Without Access To Clean Water: 2.53% </h1>
            <div className="text">
                <p align="center" style={{ color: 'white' }}>The United States has made progress in providing clean water, especially in urban areas, where most Americans have access to reliable public water systems. However, challenges persist in rural areas, low-income communities, and some Native American reservations, where aging infrastructure and contamination from industrial or agricultural runoff affect water quality...</p>
            </div>
            
            <h1 align="center" style={{ color: 'white' }}>Current Solutions</h1>
            <div className="text">
                <p align="center" style={{ color: 'white' }}>To address growing health risks caused by contaminated water, the CDC Foundation supported 6 organizations, from 2023-2024, that work to increase public awareness of water, sanitation, and hygiene issues and to improve these conditions in communities with unsafe water systems.</p>
            </div>
            </>
            )}
            {countryId === 11 && (
            <>
           
            
            <div className="grid">
                <svg className="grid-svg" xmlns="http://www.w3.org/2000/svg" width="982" height="786" viewBox="0 0 982 786" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M490 401V537H348.5V401H490ZM490 785.5V676H348.5V785.5H347.5V676H206V785.5H205V676H63.5V785.5H62.5V676H0V675H62.5V538H0V537H62.5V401H0V400H62.5V258H0V257H62.5V116H0V115H62.5V0H63.5V115L205 115V0H206V115L347.5 115V0H348.5V115H490V0H491V115L627.5 115V0H628.5V115H765V0H766V115L902.5 115V0H903.5V115H982V116H903.5V257H982V258H903.5V400H982V401H903.5V537H982V538H903.5V675H982V676H903.5V785.5H902.5V676H766V785.5H765V676H628.5V785.5H627.5V676H491V785.5H490Z" fill="url(#paint0_radial_1_8)" />
                    <defs>
                        <radialGradient id="paint0_radial_1_8" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(491 392.75) rotate(90) scale(513.25 679.989)">
                            <stop stopColor="white" stopOpacity="0.2" />
                            <stop offset="1" stopColor="#000" stopOpacity="0" />
                        </radialGradient>
                    </defs>
                </svg>
                <div className="blur"></div>
            </div>
            
            <div className="title">
                <p class="title-text">United</p>
                <p class="title-text">States</p>
            </div>
            
            <h1 align="center" style={{ color: 'white' }}> Percentage of Population Without Access To Clean Water: 2.53% </h1>
            <div className="text">
                <p align="center" style={{ color: 'white' }}>The United States has made progress in providing clean water, especially in urban areas, where most Americans have access to reliable public water systems. However, challenges persist in rural areas, low-income communities, and some Native American reservations, where aging infrastructure and contamination from industrial or agricultural runoff affect water quality...</p>
            </div>
            
            <h1 align="center" style={{ color: 'white' }}>Current Solutions</h1>
            <div className="text">
                <p align="center" style={{ color: 'white' }}>To address growing health risks caused by contaminated water, the CDC Foundation supported 6 organizations, from 2023-2024, that work to increase public awareness of water, sanitation, and hygiene issues and to improve these conditions in communities with unsafe water systems.</p>
            </div>
            </>
            )}
            {countryId === 12 && (
            <>
           
            
            <div className="grid">
                <svg className="grid-svg" xmlns="http://www.w3.org/2000/svg" width="982" height="786" viewBox="0 0 982 786" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M490 401V537H348.5V401H490ZM490 785.5V676H348.5V785.5H347.5V676H206V785.5H205V676H63.5V785.5H62.5V676H0V675H62.5V538H0V537H62.5V401H0V400H62.5V258H0V257H62.5V116H0V115H62.5V0H63.5V115L205 115V0H206V115L347.5 115V0H348.5V115H490V0H491V115L627.5 115V0H628.5V115H765V0H766V115L902.5 115V0H903.5V115H982V116H903.5V257H982V258H903.5V400H982V401H903.5V537H982V538H903.5V675H982V676H903.5V785.5H902.5V676H766V785.5H765V676H628.5V785.5H627.5V676H491V785.5H490Z" fill="url(#paint0_radial_1_8)" />
                    <defs>
                        <radialGradient id="paint0_radial_1_8" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(491 392.75) rotate(90) scale(513.25 679.989)">
                            <stop stopColor="white" stopOpacity="0.2" />
                            <stop offset="1" stopColor="#000" stopOpacity="0" />
                        </radialGradient>
                    </defs>
                </svg>
                <div className="blur"></div>
            </div>
            
            <div className="title">
                <p class="title-text">United</p>
                <p class="title-text">States</p>
            </div>
            
            <h1 align="center" style={{ color: 'white' }}> Percentage of Population Without Access To Clean Water: 2.53% </h1>
            <div className="text">
                <p align="center" style={{ color: 'white' }}>The United States has made progress in providing clean water, especially in urban areas, where most Americans have access to reliable public water systems. However, challenges persist in rural areas, low-income communities, and some Native American reservations, where aging infrastructure and contamination from industrial or agricultural runoff affect water quality...</p>
            </div>
            
            <h1 align="center" style={{ color: 'white' }}>Current Solutions</h1>
            <div className="text">
                <p align="center" style={{ color: 'white' }}>To address growing health risks caused by contaminated water, the CDC Foundation supported 6 organizations, from 2023-2024, that work to increase public awareness of water, sanitation, and hygiene issues and to improve these conditions in communities with unsafe water systems.</p>
            </div>
            </>
            )}
            
        </div>
    );
};

export default DetailsPage;
