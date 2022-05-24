import React from 'react'
import CustomImage from './CustomImage'

export default function RecipeCard({recipe}) {
  return (
    <div className='recipe-card'>
        <CustomImage imgSrc={recipe.image} pt='65%'/>
        <div className='recipe-card-info'>
            <img className='auther-img' src={recipe.authorImg} alt='' />
            <p className='recipe-title'>{recipe.title}</p>
            <p className='recipe-desc'>Mussum Ipsum, cacilds vidis litro abertis. Copo furadis é disculpa de bebadis, arcu quam euismod magna.</p>
            <a className='view-btn' href='#!'>View Recipe</a>
        </div>
    </div>
  )
}
