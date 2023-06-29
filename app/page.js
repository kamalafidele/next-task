'use client';

import {useRouter} from 'next/navigation';

import CheckBox from '@/components/CheckBox';
import styles from './page.module.css';

export default function Home() {
  const router = useRouter();

  const cards = [
    {
      title: 'Cat fact',
      to: '/catfact'
    },
    {
      title: 'Bitcoin price',
      to: '/bitcoinprice'
    },
    {
      title: 'Activity',
      to: '/activity'
    },
    {
      title: 'Dog image',
      to: '/dogimage'
    }
  ];

  const handleClick = (cardItem) => {
    router.push(cardItem.to);
  };

  const Card = ({cardItem}) => {
    return (
      <div className={styles.card} onClick={() => handleClick(cardItem)}>
        <span>{cardItem.title}</span>
      </div>
    );
  };

  return (
    <main className={styles.main}>
      <div className={styles.box}>
        <h3 className={styles.header} >Upwork</h3>
        <p>
          Upwork connects businesses with
          independent
          professionals and agencies
          around the globe. Where companies and
          freelancers work together in new ways that...
        </p>

        <div className={styles.list}>
          <div className={styles.item}>
            <div className={styles.left}>
              <span className={styles.avatar}>A</span>
              <span className={styles.name}>
                List Item
              </span>
            </div>
            <CheckBox checked={false} />
          </div>
          <div className={styles.center}>
            <div className={styles.left}>
              <span className={styles.avatar}>A</span>
              <span className={styles.name}>
                List Item
              </span>
            </div>
            <CheckBox checked={true} />
          </div>
          <div className={styles.item}>
            <div className={styles.left}>
              <span className={styles.avatar}>A</span>
              <span className={styles.name}>
                List Item
              </span>
            </div>
            <CheckBox checked={false} />
          </div>
        </div>

        <div className={styles.actions}>
          <ul>
            <li>Action 1</li>
            <li>Action 2</li>
          </ul>
        </div>
      </div>

      <div className={styles.grid}>
        {cards.map((cardItem, index) => (
          <Card key={index} cardItem={cardItem} />
        ))}
      </div>
    </main >
  );
}
