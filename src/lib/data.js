export const phtosData = async () => {
     const res = await fetch('https://pixgen-zeta.vercel.app/data.json')
     const data = await res.json()
     return data ;
}

