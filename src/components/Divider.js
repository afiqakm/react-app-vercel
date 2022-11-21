
export default function Divider(props) {
    let badge;
    switch (props.status) {
        case 'BETA':
            badge = (
                <span className="badge badge-info cursor-pointer">{props.status}</span>
            )
            break;
        case 'ALPHA':
            badge = (
                <span className="badge badge-warning cursor-pointer ">{props.status}</span>
            )
            break;
        case 'PRE-ALPHA':
            badge = (
                <span className="badge badge-error cursor-pointer ">{props.status}</span>
            )
            break;
        default:
            badge =(
                <span className="badge badge-primary cursor-pointer ">{props.status}</span>
            )
    }


    return (
        <div className="sticky top-0  snap-end divider py-6 z-20 bg-base-100">
            <h1 className='font-bold text-xl'>{props.title}</h1>
            {badge}
        </div>
    )
}
