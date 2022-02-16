import { FC } from "react"

import Style from './Content.module.sass'

const Content:FC = () => {
    return (<div className={`${Style.main} ${Style.item}`}>
        <h2>Описание вакансии</h2>
        <h3>Вам по душе Node(80%) и React(20%) тогда - это позиция мимо которой ты не пройдешь :
            Full-Stack Developer в международной компании SoftTeco !
        </h3>
        <h3>Мы предлагаем : </h3>
        <p>
            Ваш контракт не зависит от отношений с заказчиком. При желании можно спланировать и согласовать переход в другой проект, с другими технологиями и командой.
            Возможность участия в социальных проектах, которые компания ведет в сотрудничестве с ООН, ВОЗ, Красным Крестом и другими международными организациями;
            Четкая организация процесса разработки, использование Jira, GIT Flow, SCRUM;
            Вся внутренняя  коммуникация в компании ведется в самой продвинутой экосистеме - Google.
            Обратная связь о вашей работе - 3 раза в год, с реальной помощью в решении возможных трудностей, с которыми вы столкнулись. На обратной связи даются рекомендации по планированию карьеры.
            Сo-working зоны для тех, кто работает удаленно и лишь иногда приходит в офис.
            Процесс по начислению бонусов и премий за различные дополнительные активности;
            Образовательные программы, в том числе по английскому и польскому языкам. Доступная всем сотрудникам База Знаний SoftTeco (видео-курсы, записи конференций и митапов, оплата внешнего обучения, сертификация и т.п.);
            Компенсация медицинского страхования и спорта;
            Свобода графика, физического местонахождения и пола.
        </p>
        <h3>Хотели бы увидеть :</h3>
        <p>
            - Опыт в разработке 3+ лет

            - Опыт работы c JS/React/Typescript от 1 года

            - Опыт работы с Node.js не менее 1.5 года
        </p>
    </div>)
}

export default Content