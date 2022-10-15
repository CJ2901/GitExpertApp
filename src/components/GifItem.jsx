export const GifItem = ({title, url, id}) => {
  
    return (
        <div className="card">
            <img src={url} alt={title} />
            <h4>{title}</h4>
        </div>
    )
}
