import './Thanks.css'
import {BsFillEmojiHeartEyesFill,BsFillEmojiSmileFill,BsFillEmojiNeutralFill,BsFillEmojiFrownFill} from 'react-icons/bs'
const emojiData={
    Insatisfeito:<BsFillEmojiFrownFill/>,
    neutro:<BsFillEmojiNeutralFill/>,
    satisfeito:<BsFillEmojiSmileFill/>,
    muito_satisfeito:<BsFillEmojiHeartEyesFill/>,
}
function Thanks({data}){
    return(
       <div className="thanks-container">
        <h2>Falta pouco...</h2>
        <p>
            A sua opnião é muito importante, em breve voce receberá um cupom de 10%
            de desconto para a sua próxima compra.
        </p>
        <p>Para concluir sua avaliação clique no botão de Enviar abaixo.</p>
        <h3>Aqui esta o resumo da sua avaliação {data.name}:</h3>
        <p className="review-data">
            <span>Satisfação com o produto: </span>
            {emojiData[data.review]}
        </p>
        <p className="review-data">
            <span>Comentario: </span>
            {data.comment}
        </p>
       </div>
    )
}
export default Thanks