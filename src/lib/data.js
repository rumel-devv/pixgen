export const phtosData = async () => {
     const res = await fetch('https://pixgen-zeta.vercel.app/data.json')
     const data = await res.json()
     return data ;
}
export const CategoryData = async () => {
     const res = await fetch('http://localhost:3000/category.json')
     const data = await res.json()
     return data ;
}

