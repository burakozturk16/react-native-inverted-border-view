# react-inverted-border-view

This repository includes an example react native component it mimics an inverted border view. 

!!!They are not native/real inverted view!!!

## Limitations

The corners are absolute views which were positioned to each corner therefore the corners won't show if you set `ornerBackgroundColor` same as `contentBackground Color` or transparent.

## Using

Just download or copy/paste `InvertedBorderView.js` in to your project wherever you want.

    import InvertedBorderView from './InvertedBorderView';
    
    render(){
      return (
        <InvertedBorderView
           cornerRadius={20}
           width='100%'
           height={550}
           customStyles={{marginTop:16}}
           cornerBackgroundColor='black'
           contentBackgroundColor='white'
           contentView={<Text>Hello Component</Text>}
        />
      )
    }

## Contribute

All PRs are welcome!


### Todos

- Native inverted borders for usign corners transparent :D
- An example

## License

This script is open-source!
