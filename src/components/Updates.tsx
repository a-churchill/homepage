import React from 'react';
import { createUseStyles } from 'react-jss';
import ReactMarkdown from 'react-markdown';
import ScrollableAnchor from 'react-scrollable-anchor';

import { shadowColor } from '../common/theming';
import { UpdateProps, UpdatesProps } from '../types/props';
import { AppTheme } from '../types/styles';
import Image from './Image';

type MarkdownImageProps = {
  alt: string;
  title?: string;
  src: string;
};

const useStyles = createUseStyles((theme: AppTheme) => ({
  updateContainer: {
    width: "75%",
    minWidth: 290,
    margin: "auto",
    background: theme.colorHighlight,
    padding: 30,
    marginTop: 30,
    marginBottom: 50,
    boxShadow: `${shadowColor(0.25)} 0px 0px 20px 0`,
    borderRadius: 8,
  },
  body: {
    textAlign: "left",
    width: "60%",
    minWidth: 240,
    maxWidth: 600,
    margin: "auto",
    position: "relative",
    fontSize: "1.2rem",
  },
  image: {
    width: "120%",
    position: "relative",
    left: "calc(-1 * 10%)",
    marginBottom: 5,
  },
  imageContainer: {
    textAlign: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  title: {
    margin: 10,
  },
  subtitle: {
    margin: 0,
  },
  byline: {
    fontWeight: "normal",
    margin: 10,
  },
}));

const Updates = (props: UpdatesProps) => {
  const classes = useStyles();
  const contents = require(`../content/${props.contentFile}`) as [UpdateProps];
  return (
    <div>
      {contents.map((content) => (
        <ScrollableAnchor id={content.anchor} key={content.anchor}>
          <div className={classes.updateContainer}>
            <h1 className={classes.title}>{content.title}</h1>
            <h2 className={classes.subtitle}>{content.subtitle}</h2>
            <h3
              className={classes.byline}
            >{`Andrew Churchill | ${content.date}`}</h3>
            <div className={classes.body}>
              <ReactMarkdown
                source={content.body}
                renderers={{
                  image: (props: MarkdownImageProps) => {
                    return (
                      <div className={classes.imageContainer}>
                        <Image
                          src={require(`../imgs/updates/scaled/${props.src}`)}
                          overlaySrc={require(`../imgs/updates/thumbnails/${props.src}`)}
                          alt={props.alt}
                          className={classes.image}
                        />
                        {props.title && <i>{props.title}</i>}
                      </div>
                    );
                  },
                }}
              />
            </div>
          </div>
        </ScrollableAnchor>
      ))}
    </div>
  );
};

export default Updates;
