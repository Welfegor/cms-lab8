import './Policy.css';
import Dotsettings from './Icons/Dotsettings';

function Policy(props) {
  return (
    <div className="Policy-wrapper">
        <div className="Policy-conditions">
            <a href="#">Условия предоставления услуг</a>
        </div>
        <div className="Policy-konfidential">
            <a href="#">Политика конфиденциальности</a>
        </div>
        <div className="Policy-cookie">
            <a href="#">Политика в отношении файлов cookie</a>
        </div>
        <div className="Policy-advertisement">
            <a href="#" className="Policy-advertisement-text">Информация о рекламе</a>
            <span>Ещё</span>
            <Dotsettings class="Policy-advertisement-dot" />
        </div>
        <div className="Policy-rights">
            <span>© Twitter, Inc., 2021.</span>
        </div>
    </div>
  );
}

export default Policy