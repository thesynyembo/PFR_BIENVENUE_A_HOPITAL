import axios from "axios";
import React, { useEffect, useState } from "react"
import { Grid, Icon, Image } from 'semantic-ui-react'
import styled from 'styled-components'
import CustomScroll from 'react-customscroll'
import { useParams} from "react-router-dom"

const Div = styled.div`
	padding-left: 20%;
	padding-right: 20%;
	.ContainerCarte {
		background: #fff;
		width: 50%;
		position: absolute;
		top: 90px;
		left: 10%;
		box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
		z-index: 3;
		border: 1px solid #05f2db;
		height: calc(70vh - 50px);
	}
	.icone {
		color: #d90718;
	}
	.title {
		color: #d90718;
		padding-top: 7%;
		padding-bottom: 6%;
		text-align: center;
		font-size: 23px;
		font-weight: 300;
		font-style: italic;
	}

	ol {
		display: flex;
		justify-content: flex-start;
		list-style-type: none;
	}
	.iconE {
		font-size: 1.5em;
		color: #9d9d9c;
	}
	.iconE:hover {
		color: #d90718;
	}
	.annuler {
		cursor: pointer;
		position: absolute;
		z-index: 3;
		margin-top: 4%;
		font-size: 2em;
		color: #d90718;
	}
	.annuler:hover {
		color: #9d9d9c;
	}
	span {
		color: #d90718;
		// font-family:"Mont Bold";
		font-size: 18px;
		font-weight: 100;
	}
	.sousTitle {
		color: #9d9d9c;
		// font-family:"Mont Bold";
		padding-left: 4%;
		font-size: 23px;
		font-weight: 100;
		font-style: italic;
	}
	.paragraphe {
		color: #9d9d9c;
		font-size: 15px;
		font-weight: 100;
		margin-left: 32px;
	}
	// scroll

	.react-customscroll-scrollbar {
		background-color: red !important;
	}
	.react-customscroll-scrollbar-area {
		background-color: rgb(174, 174, 174) !important;
	}
`;
const DivB = styled.p`
	width: 100%;
	border-bottom-style: dotted;
`;

export default function CardDetailHopital({ hopital, visible, changementDisplay }) {

  const [hopitalSep, setHopitalSep] = useState([]);

  let { id } = useParams();
  const params = { id };
  console.log(params.id);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/Map/Specialites/${params.id}?`)
      .then((res) => {
        setHopitalSep(res.data);
      })
      .catch((erreur) => console.log(erreur));
  }, []);


	return (
		<Div>
			{visible ? (
				<div className="ContainerCarte">
					<CustomScroll>
						<Grid>
							{/* title Hôpital */}
							<Grid.Column mobile={13} tablet={13} computer={13}>
								<p className="title">{hopital.name}</p>
							</Grid.Column>

							{/* button close */}
							<Grid.Column mobile={3} tablet={3} computer={3}>
								<div className="annuler" onClick={() => changementDisplay()}>
									<i class="far fa-window-close" />
								</div>
							</Grid.Column>

							{/* image */}
							<Grid.Column mobile={16} tablet={16} computer={16}>
								<Image src={hopital.image} style={{ textAlign: 'center' ,width:"100%",height:"200px", objectFit:"contain"}} />
							</Grid.Column>

							{/* content cardDetail */}
							<Grid.Column mobile={16} tablet={16} computer={16}>
								<p className="paragraphe">
									<Icon name="map marker alternate" className="icone" />
									<span className="icone">Adresse</span> : {hopital.adress}
								</p>
								<p className="paragraphe">
									<Icon name="phone" className="icone" />
									<span className="icone">Téléphone</span> : {hopital.phone}
								</p>
								<p className="paragraphe">
									<Icon name="envelope" className="icone" />
									<span className="icone">Gmail</span> : {hopital.email}
								</p>
								<p className="paragraphe">
									<Icon name="clock outline" className="icone" />
									<span className="icone">Heure</span> : {hopital.heure_de_service}
								</p>
								<p className="paragraphe">
									<Icon name="info" className="icone" />
									<span className="icone">Langue(s)</span> :{hopital.email}
								</p>
							</Grid.Column>

							{/* colonne spécialité */}
							<Grid.Column mobile={16} tablet={16} computer={16}>
								<p className="sousTitle">Spécialité</p>
								<p className="paragraphe">
								{ hopitalSep.specialite == undefined 
              ? 
              null
              :
               hopitalSep.specialite.map((e)=>
                    <ul className='content'>
                      <li>{e.nom_specialite}fyy</li>
                    </ul>
                    )}
								</p>
							</Grid.Column>

							{/* colone direction */}
							<Grid.Column mobile={16} tablet={16} computer={16}>
								<p className="sousTitle">Direction de l'hôpital</p>
								<p className="paragraphe">
									<ol>
										<li>
											<span>Directeur</span> : {hopital.directeur}
										</li>
									</ol>
								</p>
								<ol>
									<a href="#" target="target">
										<li>
											<Icon name="facebook f" className="iconE" />
										</li>
									</a>
									<a href="#" target="target">
										<li>
											<Icon name="twitter" className="iconE" />{' '}
										</li>
									</a>
									<a href="#" target="target">
										<li>
											<Icon name="linkedin" className="iconE" />
										</li>
									</a>
								</ol>
							</Grid.Column>
						</Grid>
						{/* close scroll */}
					</CustomScroll>
				</div>
			) : (
				''
			)}
		</Div>
	);
}
