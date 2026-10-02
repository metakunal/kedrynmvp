# Color palette from the supplied reference

Sampled directly from the user-provided `image.png` screenshot on 2026-10-02. The screenshot includes a video overlay, so sampling was limited to the KEDRYN interface areas. These exact sampled RGB values now drive the application's CSS tokens and locally generated SVG assets.

| Use | Hex | Reference area |
|---|---|---|
| Primary burgundy | `#542336` | Top masthead and selected dinner tab |
| Page cream | `#FDF8F2` | Main page background |
| Surface cream | `#FFFAF4` | Card and input surfaces |
| Warm sand | `#F9EFE3` | Editorial notice band |
| Soft gold | `#F1DBC6` | Wordmark highlight |
| Muted plum | `#6A5053` | Secondary navigation text |
| Hairline | `#E1D4CE` | Menu divider |

Burgundy on page cream has an approximately 11.9:1 contrast ratio; muted plum on page cream is above 6:1. Focus rings use burgundy. Error and success messages include text and structural cues, not only color.
