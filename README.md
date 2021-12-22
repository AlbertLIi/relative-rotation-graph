# Relative Rotation Graph 

This project aims to provide a free option when it comes to Relative Rotation Graphs.

___

## Technologies & key concepts used

* NestJS
* Typescript
* MongoDB
* Cache

<br/>

___
___

<br/>
<br/>

# About RRGs
## Introduction

Relative Rotation Graphs, commonly referred to as RRGs, are a unique visualization tool for relative strength analysis. Chartists can use RRGs to analyze the relative strength trends of several securities against a common benchmark, and against each other. The real power of this tool is its ability to plot relative performance on one graph and show true rotation. We have all heard of sector and asset class rotation, but it is hard to visualize this “rotation” sequence on linear charts. RRGs use four quadrants to define the four phases of a relative trend. True rotations can be seen as securities move from one quadrant to the other over time.

## RRG Construction

Relative Rotation Graphs are plotted on a standard scatter-plot canvas with an x-axis (horizontal) and a y-axis (vertical). The JdK RS-Ratio indicator is the input for the horizontal axis, and the JdK RS-Momentum indicator is the input on the vertical axis. These axes cross at 100 to create four relative performance quadrants. The Relative Rotation Graph simply plots RS-Ratio and RS-Momentum values for each symbol. If the symbol universe is the nine sector SPDRs and the S&P 500 is the benchmark, we will see nine points on the Relative Rotation Graph (RRG) and each point represents that particular sector's RS-Ratio and RS-Momentum value.

## Interpretation

Before looking at some interpretation guidelines, bear in mind that Relative Rotation Graphs are not a trading system and there are no predefined trading rules or signals. Look at RRGs as another type of charting method that is open to interpretation. Different people looking at the same chart will come up with different interpretations. Here are some rules-of-thumb you may want to follow: 

Considering the next image as example: 

IMAGE AS EXAMPLE

- RS-Ratio is more important than RS-Momentum. RS-Ratio is also the preferred metric for ranking a group of symbols
- The rotational patterns are not always perfectly circular and will not always rotate through all four quadrants in a clockwise manner. These are, after all, financial markets driven by fear and greed.
- In general, a cross from the left half to the right half signals a new uptrend in relative performance. This means RS-Ratio has moved above 100. Conversely, a cross from the right half to the left half signals a new downtrend in relative performance. This means RS-Ratio has moved below 100. 
- Symbols in the leading quadrant should be on your buy list because they show relative strength. Symbols in the weakening quadrant should be on your watch-list for deterioration. Symbols in the lagging quadrant should be on your avoid list because they show relative weakness. Symbols in the improving quadrant should be on your shopping list as potential buys.
- Relative Rotation Graphs on their own are not enough for making decisions. Instead, RRGs are great for channeling your attention to those areas of the market that deserve it. 


## Conclusion

Relative Rotation Graphs make it easy to separate the market leaders from the market laggards. In this regard, RRGs save time, and money, because they narrow the focus to parts of the market that deserve attention for further analysis. RRGs can be tailored to suit any trading or investing style because they measure both momentum and trend for relative performance. Momentum traders can focus on crosses into the improving quadrant or the weakening quadrant. Trend followers can focus on crosses into the leading quadrant or lagging quadrant. Keep in mind that these are relative performance indicators, and there is still a risk that the rotation turns back or even reverses. As with all technical tools, these relative performance indicators should be used in conjunction with other technical tools to give chartists a more complete picture. 


