import React from "react";
import { Link } from "react-router-dom";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const Single = () => {
  return (
    <>
      <div className="single">
        <div className="content">
          <img
            src="https://i.ibb.co/Rz5pMkG/image-webp-1.webp"
            alt="single-img"
          />
          <div className="user">
            <img src="https://i.ibb.co/Jxcc5Km/mohit2.jpg" alt="user-img" />

            <div className="info">
              <span>Mohit</span>
              <p>Posted 1 day ago</p>
            </div>

            <div className="edit">
              <Link to={`/write?edit=2`}>
                <FaRegEdit />
              </Link>
              <Link to={`/write?delete=2`}>
                <MdDelete />
              </Link>
            </div>
          </div>

          <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
            aliquid maxime eum sed vel exercitationem repellat ipsa nemo quas
            hic. Ad tenetur reiciendis nulla cumque delectus corporis inventore
            tempora laborum animi, minus ducimus nisi officiis quasi, impedit
            vero ut architecto doloremque velit facere eos omnis eligendi optio
            recusandae dolore! Porro similique, quod aspernatur ipsa placeat
            obcaecati quibusdam non fuga quae nihil corporis accusamus facilis
            odit numquam maiores consequuntur.
            <br />
            <br />
            Accusantium voluptatum voluptatem harum vitae error suscipit
            doloribus quisquam quod, eaque distinctio porro quas magni omnis
            minus dignissimos deserunt debitis vel voluptates nobis nesciunt eos
            id dolor recusandae necessitatibus.
            <br />
            <br />
            Explicabo aliquid eius qui rem saepe laudantium dignissimos odit
            cumque blanditiis optio aspernatur, eaque voluptate corrupti, omnis
            impedit? Neque commodi iusto aut voluptas eum id est repellat maxime
            ullam doloremque, aperiam voluptates nobis impedit, quidem rerum
            quisquam corrupti assumenda. Ea repellendus in voluptatibus quidem
            perspiciatis consectetur omnis aliquam necessitatibus unde, fuga
            labore sapiente? Eum reiciendis vitae saepe vel eaque consequatur
            doloribus dignissimos vero animi, nulla culpa voluptates eos,
            architecto perferendis. Obcaecati optio voluptas a velit consectetur
            doloribus, odit magnam illum? Doloremque porro quasi quod debitis,
            nobis harum obcaecati earum beatae autem alias dolor distinctio
            voluptatum nisi laudantium blanditiis reprehenderit laborum
            perferendis labore sit.
          </p>
        </div>
        <div className="menu">m</div>
      </div>
    </>
  );
};

export default Single;
