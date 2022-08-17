import { useTranslation } from 'react-i18next';
import {bussinesHoursData} from '../../data/BussinesHoursData'
import cookie from 'js-cookie'

const BussinesHours = () => {
    const currenLanguageCode = cookie.get('i18next') || 'ua'
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
        <div className="col-md-3 col-sm-6">
            <h4 className='text-center'>{t('footer_column_4_business_hours')}</h4>
            {bussinesHoursPost}
        </div>
    )
}

export default BussinesHours