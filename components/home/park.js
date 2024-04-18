export default function Park({park}) {
    return (
        <div className="w-1/3 p-4">
            <h1 className="text-2xl text-white">{park.name}</h1>
            <img className="rounded-lg shadow-lg hover:shadow-2xl object-cover w-full h-52" src={park.images[0].url}></img>
            <p className="text-slate-600 text-lg">{park.caption}</p>
        </div>
    )
}