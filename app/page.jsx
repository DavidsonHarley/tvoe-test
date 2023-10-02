import SideBar from '@/components/SideBar/SideBar';
import cls from './page.module.scss';
import Frame1 from '@/components/Frame1/Frame1';
import Frame2 from '@/components/Frame2/Frame2';

export default function Home() {
  return (
    <main className={cls.main}>
      <SideBar />
      <div className={cls.content}>
        <Frame1 />
        <Frame2 />
      </div>

    </main>
  );
}
