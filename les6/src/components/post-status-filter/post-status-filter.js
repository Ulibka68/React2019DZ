import React from "react";
// import {Button} from "reactstrap";
import style from "./PostStatusFilter.module.scss";


// const PostStatusFilter = ({onAllItems,onLikedItems}) => {
//     return (
//         <div className="btn-group">
//             <Button  
//                 color='info'
//                 onClick={onAllItems}
//             >
//                 Все
//             </Button>
//             {/* <button type="button" className="btn btn-info">Все</button> */}
//             <button 
//                 type="button" 
//                 className="btn btn-outline-secondary"
//                 onClick={onLikedItems}
//             >
//                 Понравилось
//             </button>
            
//         </div>
//     );
// }


class PostStatusFilter extends React.Component {
    constructor (props) {
        super(props);

        let {onAllItems,onLikedItems} = this.props;

        this.buttons = [
            {name : 'all',label:'Все',color : 'info', callBack : onAllItems},
            {name : 'like',label:'Понравилось',color : 'info',outline : true, callBack : onLikedItems}
        ];
    }
    render() {
        
        const buttons = this.buttons.map(({name,label,color,outline,callBack })=>{
            outline = !! outline;
            const active = (this.props.filter === name);
            let clazz = active ? ' btn-info ' : ' btn-outline-secondary '
            clazz += ' btn ' + style.btn1;

        return (
            <button  
                    key={name}
                    color={color}
                    onClick={callBack}
                    className={clazz}
                >
                    {label}
                </button>
            );
        // if (outline) { return(
        //     <Button  
        //         key={name}
        //         color={color}
        //         outline
        //         onClick={callBack}
        //         className={style.btn1}
        //     >
        //         {label}
        //     </Button>
        //  );
        // } else { return (
        //     <Button  
        //         key={name}
        //         color={color}
        //         onClick={callBack}
        //         className={style.btn1}
        //     >
        //         {label}
        //     </Button>
        //   );
        // }

        });

        return (
            <div className="btn-group">
                {buttons}
            </div>
        );
    }
}

export default PostStatusFilter;