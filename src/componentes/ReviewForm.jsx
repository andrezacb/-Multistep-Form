import {BsFillEmojiHeartEyesFill,BsFillEmojiSmileFill,BsFillEmojiNeutralFill,BsFillEmojiFrownFill} from 'react-icons/bs'
import './ReviewForm.css'
function ReviewForm({data,updateFieldHandler}){
    return(
      <div className="review-form">
        <div className="form-control score-container">
            <label className="radio-container">
                <input type="radio" name="review" value="Insatisfeito" required checked={data.review === "Insatisfeito"} onChange={(e)=>updateFieldHandler("review", e.target.value)}/>
                <BsFillEmojiFrownFill/>
                <p>Insatisfeito</p>
            </label>
            <label className="radio-container">
                <input type="radio" name="review" value="neutro" required checked={data.review === "neutro"} onChange={(e)=>updateFieldHandler("review", e.target.value)}/>
                <BsFillEmojiNeutralFill/>
                <p>Poderia ser melhor</p>
            </label>
            <label className="radio-container">
                <input type="radio" name="review" value="satisfeito" required checked={data.review === "satisfeito"} onChange={(e)=>updateFieldHandler("review", e.target.value)}/>
                <BsFillEmojiSmileFill/>
                <p>satisfeito</p>
            </label>
            <label className="radio-container">
                <input type="radio" name="review" value="muito_satisfeito" required checked={data.review === "muito_satisfeito"} onChange={(e)=>updateFieldHandler("review", e.target.value)}/>
                <BsFillEmojiHeartEyesFill/>
                <p>Muito satisfeito</p>
            </label>
      </div>
      <div className="form-control">
            <label htmlFor="comment">Comentário</label>
            <textarea name="comment" id="comment" placeholder='conte como foi sua experiência com o produto...' required value={data.comment|| ""} onChange={(e)=> updateFieldHandler("comment",e.target.value)}></textarea>
        </div>
      </div>
    )
}
export default ReviewForm