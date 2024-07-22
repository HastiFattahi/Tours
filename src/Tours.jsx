import Tour from './Tour'
const Tours = ({tours,removeTour}) => {
  return (
    <section>
        <div className="title">
            <div className="title-underline">
                 
            </div>
        </div>
        <div className="tours">
             {tours.map((tour)=>{
                 return <Tour key={tour.id} removeTour={removeTour} {...tour}/>
             })}
        </div>
    </section>
  )
}
export default Tours