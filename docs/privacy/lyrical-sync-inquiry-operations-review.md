# Lyrical Sync inquiry handling: internal verification notes

Status: local review notes only. The public policy pages have not been updated or redeployed from this draft.

## Operator-confirmed facts used in the draft

- Inquiries arrive in the operator's Google Workspace mailbox.
- Resend is used only for outbound email delivery; the policy does not say that incoming inquiries pass through Resend.
- The operator is the only person who reviews inquiry messages and attachments.
- Inquiry content and attachments are manually removed within six months of initial receipt. The operator deletes them from the managed mailbox and empties its Trash.
- No separate copies are retained.
- Requests to access, correct, delete, or restrict processing of app-related personal information can be sent to the published privacy email address.
- The app's local-data controls were implemented and tested separately (commits `8211fa2` and `d980ccc`). Turning off recovery-copy saving requires confirmation, deletes existing recovery copies, and prevents new ones; it is separate from original-file auto-save, and the default is on.
- Clear local data removes recent-file entries, saved security-scoped access bookmarks, and recovery copies; resets UI and shortcut settings; and leaves recovery-copy saving and original-file auto-save off. A minimal setting remains to remember those two choices.
- These actions do not delete original lyrics/audio files or the current editing content. File references and access information for an open document remain in memory until it is closed. Opening files or changing settings later may create local records again.
- Storage errors can cause some deletions or settings writes to fail; the app reports the error and offers a retry.
- The app controls do not guarantee removal of WebKit/OS caches or provider backups. Do not claim unrecoverable deletion from those locations.
- The local-policy draft follows the operator-confirmed behavior for the implemented and tested controls in commits `8211fa2` and `d980ccc`.
- The Windows Store edition includes WebView2 Runtime. Microsoft documents required diagnostics, optional diagnostics controlled by Windows Diagnostic data settings, default-on Defender SmartScreen transmission, and diagnostic minidumps sent when a WebView2 process crashes. The notice is Windows-only; macOS uses WKWebView. Sources: [WebView2 data and privacy](https://learn.microsoft.com/en-us/microsoft-edge/webview2/concepts/data-privacy), [Microsoft Privacy Statement](https://privacy.microsoft.com/en-us/privacystatement).
- Clear local data does not remove WebView2 diagnostic files, OS caches, or information already sent to Microsoft.

## Items to verify before any further public claims

- Whether the Google Workspace and Resend accounts have applicable data-processing agreements, and the exact entities/terms involved.
- The countries where Google Workspace and Resend process or store relevant data, and the legal basis and disclosures for any cross-border transfer.
- Exact WebView2 diagnostic payloads, processing locations, and the app's actual Windows packet/crash behavior have not been independently verified; do not state specifics or promise that data is never sent.
- Whether Google Workspace retention rules, Google Vault, legal holds, mail routing, or other administrative settings can retain inquiry messages after Trash is emptied.
- What provider-side residual copies or backups may remain and for how long. Do not promise immediate or complete deletion from provider infrastructure without evidence.
- The operator's actual account security settings and access controls. Do not claim specific safeguards until verified.
- The deletion procedure end to end: message and attachment removal, Trash emptying, any operator-managed mailbox copies, and evidence that the procedure is completed by the six-month deadline.
- The handling steps and response process for access, correction, deletion, and processing-restriction requests.

Keep these unresolved items internal until the operator verifies them. Do not infer contractual coverage, processing locations, retention periods, account protections, or legal bases.
