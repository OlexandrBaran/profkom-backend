import { useTranslation } from 'react-i18next';
import {bussinesHoursData} from '../../data/BussinesHoursData'

const BussinesHours = () => {
    const currenLanguageCode = localStorage.getItem('i18nextLng') || 'ua'
    const {t} = useTranslation()
    const bussinesHoursPost = bussinesHoursData.map(item => {
        return(
            <div key={item.id}>
                <span className='d-flex justify-content-between align-items-end'>
                    <p>{(currenLanguageCode === 'ua') ? item.dayUA : item.dayEN}</p>
                    <p>{
                        (item.time === '') ? t('weekend') : item.time
                    }</p>
                </span>
        </div>
        )
    })

    return(
        <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3 mt-3 ml-3">
            <h4 className='text-center mb-3'>{t('footer_column_4_business_hours')}</h4>
            {bussinesHoursPost}
        </div>
    )
}

export default BussinesHours