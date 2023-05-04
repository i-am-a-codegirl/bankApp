
import styles from './style'
import {Navbar,Billing, Stats, Hero, CTA, Card, Testimonials, FeedbackCard, GetStarted, Business, Footer, Button, Client} from './Components'

const App = () =>  (
    <div className='bg-primary w-full overflow-hidden'>
   <div className='{`${styles.paddingX} ${styles.flexCenter}`}'>
<div className='{`${styles.boxWidth}`}'>
<Navbar/>
</div>
</div>

<div className='{`bg-primary ${styles.flexStart}}`}'>
<div className='{`styles.boxWidth`}'>
<Hero/>
</div>
</div>

<div className='{`bg-primary ${styles.paddingX} ${styles.flexStart}}`}'>
<div className='{`styles.boxWidth`}'>
<Stats/>
<Business/>
<Billing/>
<Card/>
<Testimonials/>
<Client/>
<CTA/>
<Footer/>
</div>
</div>
    </div>
  )


export default App