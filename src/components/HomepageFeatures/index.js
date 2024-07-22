import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Automatizacion de tareas',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Programa y establece tareas repetitivas para su ejecucion, Tareas con el formato <strong>crom</strong>, envio de correos electronicos con previa configuracion.
      </>
    ),
  },
  {
    title: 'Registro de las ejecuciones',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Facilitamos el registro de ejecuciones para tener mayores detalles de las ejecuciones, errores y exitos que sucedan al momento de la ejecucion.
      </>
    ),
  }
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--6')} style={{borderRadius: "8px", backgroundColor: "#F1F1F1"}}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div style={{display: "flex", gap: "10px"}}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
