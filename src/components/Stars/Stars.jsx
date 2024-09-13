import emptyStar from '../../assets/icons/empty-star.png'
import fullStar from '../../assets/icons/full-star.png'
import halfStar from '../../assets/icons/half-star.png'

function Stars({ num }) {

     const starArray = []

     if (num % 1 !== 0) {
        for (let i = 0; i < num - 1; i++) {
            starArray.push(1)
         }
         starArray.push(2)
         for (let j = 0; j < 4 - num; j++) {
            starArray.push(0)
         }
         
     } else {
        for (let i = 0; i < num; i++) {
            starArray.push(1)
         }
         for (let j = 0; j < 5 - num; j++) {
            starArray.push(0)
         }
     }

     const starIcons = [emptyStar, fullStar, halfStar]

  return (
    <div className='stars__container'>
        {
          starArray.map((val) => (
            <img src={starIcons[val]} />
          ))
        }
    </div>
  )
}

export default Stars