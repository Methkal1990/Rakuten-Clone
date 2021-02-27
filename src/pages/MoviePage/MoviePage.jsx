import React from 'react';
import { useHistory } from 'react-router-dom';

import './MoviePage.css';

function MoviePage() {
  const history = useHistory();
  return (
    <div className='moviePage'>
      <div
        className='moviePage__movieBackground'
        style={{
          backgroundImage:
            "url('https://images-0.wuaki.tv/system/shots/193964/original/snapshot-1590663440-width1920-quality80.jpeg')",
        }}
      >
        <i
          className='fa fa-play-circle fa-3x'
          aria-hidden='true'
          onClick={() => history.push('/trailer')}
        ></i>
      </div>
      <div className='moviePage__movieContent'>
        <p className='moviePage__movieDescription'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et incidunt
          sint fugiat dicta quas molestiae, odit eos quos voluptas at fuga
          inventore ab vitae eum delectus corrupti, perspiciatis quis
          recusandae? Et ullam ea eveniet veritatis, voluptate alias adipisci
          laboriosam vero iste voluptatum numquam delectus sapiente cumque nulla
          omnis repellat? Dolore quam ipsa ex dolor blanditiis obcaecati ab
          inventore saepe aliquid. Labore provident natus necessitatibus rerum
          nam temporibus quaerat obcaecati beatae. Dicta, molestias accusamus
          voluptates odio sapiente iusto facilis molestiae aperiam error ipsam
          quisquam alias ipsa quis ullam dolorum repellendus quasi! Harum
          eligendi voluptatibus incidunt amet magnam mollitia, dicta, sit
          maiores autem officia iure, dignissimos aliquam eius voluptates omnis
          ratione! Quisquam, ratione. Quos nam incidunt molestias enim qui
          quibusdam obcaecati sequi? Provident blanditiis minima natus? Libero
          repellat quae earum non possimus voluptatum odit officia unde animi
          laboriosam voluptate nemo quisquam maxime, cumque odio commodi
          praesentium accusamus eligendi repudiandae velit magni eius. Excepturi
          molestiae, animi unde quas ea, dolorum maiores vel doloremque
          accusantium a dolores expedita tempore. Suscipit, pariatur molestias
          consectetur perferendis a consequuntur porro error illum hic, amet
          quas quidem blanditiis. Dicta placeat expedita aspernatur iure sequi
          dolorum, provident voluptas corporis nulla culpa quas modi! Hic iste
          atque voluptas ab? Illum minus fugiat labore magnam enim fuga eius
          tenetur sequi placeat. Odio id autem in iste at, corrupti quos optio
          perspiciatis molestias inventore modi harum nulla assumenda
          dignissimos omnis dolor rerum facilis quibusdam similique libero amet
          architecto aliquid reprehenderit nobis? Reiciendis. Aut voluptas
          eligendi vitae accusantium nisi ex ipsa facere, sequi quas iusto esse,
          reprehenderit excepturi nihil repudiandae doloremque ab illum. Libero
          sunt iure beatae velit soluta dicta laborum eius totam? Totam aperiam
          nihil pariatur corrupti itaque accusantium fugit, similique numquam
          quidem quaerat rerum natus, animi possimus modi. Itaque odio enim
          sequi numquam laborum nihil, vero, cupiditate sunt veniam excepturi
          totam.
        </p>
      </div>
    </div>
  );
}

export default MoviePage;
