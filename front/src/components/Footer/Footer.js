import { Context } from '../../index';
import { useContext } from 'react';
import { useTranslation } from "react-i18next";
import {partners} from '../../data/footerData';
import cookie from 'js-cookie'
import Phones from '../Elements/Phones';
import Address from '../Elements/Address';
import Mail from '../Elements/Mail';
import BussinesHours from '../Elements/BussinesHours';


const Footer = () => {

    const currenLanguageCode = cookie.get('i18next') || 'ua'
    const {appTheme} = useContext(Context)
    const {t} = useTranslation()

    const partnersPost = partners.map(item => {
        return(
            <div key={item.id}>
                <p>
                    <a href={item.link} target={'_blank'} rel="noreferrer" className="text-decoration-none" style={{color:appTheme.secondaryColor}} >
                      {(currenLanguageCode === 'ua') ? item.nameUA : item.nameEN}
                    </a>
                </p>
            </div>
        )
    })
 

    
    return(
        <div className="main-footer" style={{backgroundColor:appTheme.mainColor, color:appTheme.secondaryColor}}>
            <div className="container">
                <div className="row">
                        {/*Column about us*/}
                        <div className="col-md-3 col-sm-6">
                            <h4 className='text-center'>{t('footer_column_1_about_us')}</h4>
                            <p className='text-justify'>
                            {t('footer_bottom_column_aboutUs_text')}
                            </p>
                        </div>

                        {/*Column Partners*/}
                        <div className="col-md-3 col-sm-6">
                            <h4 className='text-center'>{t('footer_column_2_our_partners')}</h4>
                                {partnersPost}
                        </div>

                        {/*Column Contacts*/}
                        <div className="col-md-3 col-sm-6">
                            <h4 className='text-center'>{t('footer_column_3_contacts')}</h4>
                            <Phones/>
                            <div className='mt-4'><Address/></div>
                            <Mail/>
                        </div>

                        {/*Column bussines hours*/}
                        <BussinesHours/>
                </div>

                {/*Footer bottom*/}
                <div className='footer-bottom'>
                    <p className='text-center'>
                        {t('trade_union_name')} {new Date().getFullYear()}. {t('rights')} 
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Footer;