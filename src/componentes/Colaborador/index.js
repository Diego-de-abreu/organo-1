import { AiFillCloseCircle } from "react-icons/ai";
import { FaHeartBroken } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import './colaborador.css'

const Colaborador = ({ colaborador, corDeFundo, aoDeletar,aofavoritar }) => {
    function favoritar(){
       aofavoritar(colaborador.id);
    }

    return (<div className="colaborador">
         <AiFillCloseCircle
            size={25} 
            className='deletar'
            onClick={() => aoDeletar(colaborador.id)}
        /> 

        <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
            <img src={colaborador.imagem} alt={colaborador.nome} />
        </div>
        <div className="rodape">
            <h4>{colaborador.nome}</h4>
            <h5>{colaborador.cargo}</h5>
            <div className='favoritar'>
            {  colaborador.favorito 
                ? <FaHeart size={25} onClick={favoritar} color="#ff0000"/> 
                : <FaHeartBroken sizer={25} onClick={favoritar}
                />
            }
            </div>
        </div>
    </div>)
}

export default Colaborador