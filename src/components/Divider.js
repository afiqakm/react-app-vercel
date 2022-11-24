
export default function Divider(props) {

    let badge;
    switch (props.status) {
        case 'BETA':
            badge = (
                <div className="tooltip tooltip-info" data-tip={props.dataTip}>
                    <span className="badge badge-info cursor-pointer" onClick={props.onClickBadge}>{props.status}</span>
                </div>
            )
            break;
        case 'ALPHA':
            badge = (
                <div className="tooltip tooltip-warning" data-tip="changelog not created yet">
                    <span className="badge badge-warning cursor-pointer" onClick={props.onClickBadge}>{props.status}</span>
                </div>
            )
            break;
        case 'PRE-ALPHA':
            badge = (
                <div className="tooltip tooltip-error" data-tip="This project are not yet started">
                    <span className="badge badge-error cursor-pointer" onClick={props.onClickBadge}>{props.status}</span>
                </div>
            )
            break;
        default:
            badge = (
                <div className="tooltip tooltip-info" data-tip="changelog not created yet">
                    <span className="badge badge-primary cursor-pointer" onClick={props.onClickBadge}>{props.status}</span>
                </div>
            )
    }


    return (
        <div className="sticky top-0  snap-end divider py-6 z-30 bg-base-100">
            <h1 className='font-bold text-xl'>{props.title}</h1>

            {badge}
        </div>
    )
}
