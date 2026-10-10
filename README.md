# Static hand-sign classifier

The webcam demo recognizes 24 static alphabet signs. J and Z require motion and are excluded from classification. Serve locally over HTTP; supply the matching model export. Camera crops are centered and resized to 28×28 grayscale, matching training dimensions. Validation uses no augmentation and does not shuffle. A webcam crop is not a hand detector; independent camera accuracy remains unmeasured.
