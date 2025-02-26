"use client";

import {
  Container,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

export default function Impressum() {
  return (
    <Container maxWidth="md">
      <Paper elevation={3} style={{ padding: "20px", marginTop: "20px" }}>
        <Typography variant="h4" gutterBottom>
          Impressum
        </Typography>
        <br />
        <Typography variant="body1">
          <strong>Kontakt:</strong> info@sondelgang.de
        </Typography>
        <Typography variant="body1">
          <strong>Verantwortlich für den Inhalt:</strong> Robert Schlick
        </Typography>
        <Typography variant="body1">
          <strong>Haftung für Inhalte</strong>
          <br />
          Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte
          auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
        </Typography>
        <Typography variant="body1">
          <strong>Haftung für Links</strong>
          <br />
          Unser Angebot enthält Links zu externen Websites Dritter, auf deren
          Inhalte wir keinen Einfluss haben.
        </Typography>
      </Paper>
      <Paper elevation={3} style={{ padding: "20px", marginTop: "20px" }}>
        <Typography variant="h4" gutterBottom>
          Datenschutz&shy;erkl&auml;rung
        </Typography>
        <Typography variant="h5" gutterBottom>
          1. Datenschutz auf einen Blick
        </Typography>
        <Typography variant="h6" gutterBottom>
          Allgemeine Hinweise
        </Typography>
        <Typography variant="body1" gutterBottom>
          Die folgenden Hinweise geben einen einfachen &Uuml;berblick
          dar&uuml;ber, was mit Ihren personenbezogenen Daten passiert, wenn Sie
          diese Website besuchen. Personenbezogene Daten sind alle Daten, mit
          denen Sie pers&ouml;nlich identifiziert werden k&ouml;nnen.
          Ausf&uuml;hrliche Informationen zum Thema Datenschutz entnehmen Sie
          unserer unter diesem Text aufgef&uuml;hrten Datenschutzerkl&auml;rung.
        </Typography>
        <Typography variant="h5" gutterBottom>
          Datenerfassung auf dieser Website
        </Typography>
        <Typography variant="h6" gutterBottom>
          Wer ist verantwortlich f&uuml;r die Datenerfassung auf dieser Website?
        </Typography>
        <Typography variant="body1" gutterBottom>
          Die Datenverarbeitung auf dieser Website erfolgt durch den
          Websitebetreiber. Dessen Kontaktdaten k&ouml;nnen Sie dem Abschnitt
          &bdquo;Hinweis zur Verantwortlichen Stelle&ldquo; in dieser
          Datenschutzerkl&auml;rung entnehmen.
        </Typography>
        <Typography variant="h5" gutterBottom>
          Wie erfassen wir Ihre Daten?
        </Typography>
        <Typography variant="body1" gutterBottom>
          Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese
          mitteilen. Hierbei kann es sich z.&nbsp;B. um Daten handeln, die Sie
          in ein Kontaktformular eingeben.
        </Typography>
        <Typography variant="body1" gutterBottom>
          Andere Daten werden automatisch oder nach Ihrer Einwilligung beim
          Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem
          technische Daten (z.&nbsp;B. Internetbrowser, Betriebssystem oder
          Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt
          automatisch, sobald Sie diese Website betreten.
        </Typography>
        <Typography variant="h6" gutterBottom>
          Wof&uuml;r nutzen wir Ihre Daten?
        </Typography>
        <Typography variant="body1" gutterBottom>
          Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung
          der Website zu gew&auml;hrleisten. Andere Daten k&ouml;nnen zur
          Analyse Ihres Nutzerverhaltens verwendet werden. Sofern &uuml;ber die
          Website Vertr&auml;ge geschlossen oder angebahnt werden k&ouml;nnen,
          werden die &uuml;bermittelten Daten auch f&uuml;r Vertragsangebote,
          Bestellungen oder sonstige Auftragsanfragen verarbeitet.
        </Typography>
        <Typography variant="h6" gutterBottom>
          Welche Rechte haben Sie bez&uuml;glich Ihrer Daten?
        </Typography>
        <Typography variant="body1" gutterBottom>
          Sie haben jederzeit das Recht, unentgeltlich Auskunft &uuml;ber
          Herkunft, Empf&auml;nger und Zweck Ihrer gespeicherten
          personenbezogenen Daten zu erhalten. Sie haben au&szlig;erdem ein
          Recht, die Berichtigung oder L&ouml;schung dieser Daten zu verlangen.
          Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben,
          k&ouml;nnen Sie diese Einwilligung jederzeit f&uuml;r die Zukunft
          widerrufen. Au&szlig;erdem haben Sie das Recht, unter bestimmten
          Umst&auml;nden die Einschr&auml;nkung der Verarbeitung Ihrer
          personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein
          Beschwerderecht bei der zust&auml;ndigen Aufsichtsbeh&ouml;rde zu.
        </Typography>
        <Typography variant="body1" gutterBottom>
          Hierzu sowie zu weiteren Fragen zum Thema Datenschutz k&ouml;nnen Sie
          sich jederzeit an uns wenden.
        </Typography>
        <Typography variant="h5" gutterBottom>
          2. Hosting
        </Typography>
        <Typography variant="body1" gutterBottom>
          Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
        </Typography>
        <Typography variant="h6" gutterBottom>
          All-Inkl
        </Typography>
        <Typography variant="body1" gutterBottom>
          Anbieter ist die ALL-INKL.COM - Neue Medien M&uuml;nnich, Inh.
          Ren&eacute; M&uuml;nnich, Hauptstra&szlig;e 68, 02742 Friedersdorf
          (nachfolgend All-Inkl). Details entnehmen Sie der
          Datenschutzerkl&auml;rung von All-Inkl:{" "}
          <Link href="https://all-inkl.com/datenschutzinformationen/">
            https://all-inkl.com/datenschutzinformationen/
          </Link>
          .
        </Typography>
        <Typography variant="body1" gutterBottom>
          Die Verwendung von All-Inkl erfolgt auf Grundlage von Art. 6 Abs. 1
          lit. f DSGVO. Wir haben ein berechtigtes Interesse an einer
          m&ouml;glichst zuverl&auml;ssigen Darstellung unserer Website. Sofern
          eine entsprechende Einwilligung abgefragt wurde, erfolgt die
          Verarbeitung ausschlie&szlig;lich auf Grundlage von Art. 6 Abs. 1 lit.
          a DSGVO und &sect; 25 Abs. 1 TDDDG, soweit die Einwilligung die
          Speicherung von Cookies oder den Zugriff auf Informationen im
          Endger&auml;t des Nutzers (z.&nbsp;B. Device-Fingerprinting) im Sinne
          des TDDDG umfasst. Die Einwilligung ist jederzeit widerrufbar.
        </Typography>
        <Typography variant="h5" gutterBottom>
          3. Allgemeine Hinweise und Pflicht&shy;informationen
        </Typography>
        <Typography variant="h6" gutterBottom>
          Datenschutz
        </Typography>
        <Typography variant="body1" gutterBottom>
          Die Betreiber dieser Seiten nehmen den Schutz Ihrer pers&ouml;nlichen
          Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten
          vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften
          sowie dieser Datenschutzerkl&auml;rung.
        </Typography>
        <Typography variant="body1" gutterBottom>
          Wenn Sie diese Website benutzen, werden verschiedene personenbezogene
          Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie
          pers&ouml;nlich identifiziert werden k&ouml;nnen. Die vorliegende
          Datenschutzerkl&auml;rung erl&auml;utert, welche Daten wir erheben und
          wof&uuml;r wir sie nutzen. Sie erl&auml;utert auch, wie und zu welchem
          Zweck das geschieht.
        </Typography>
        <Typography variant="body1" gutterBottom>
          Wir weisen darauf hin, dass die Daten&uuml;bertragung im Internet
          (z.&nbsp;B. bei der Kommunikation per E-Mail) Sicherheitsl&uuml;cken
          aufweisen kann. Ein l&uuml;ckenloser Schutz der Daten vor dem Zugriff
          durch Dritte ist nicht m&ouml;glich.
        </Typography>
        <Typography variant="h6" gutterBottom>
          Hinweis zur verantwortlichen Stelle
        </Typography>
        <Typography variant="body1" gutterBottom>
          Die verantwortliche Stelle f&uuml;r die Datenverarbeitung auf dieser
          Website ist:
        </Typography>
        <Typography variant="body1" gutterBottom>
          Robert Schlick
        </Typography>
        <Typography variant="body1" gutterBottom>
          E-Mail: info@sondelgang.de
        </Typography>
        <Typography variant="body1" gutterBottom>
          Verantwortliche Stelle ist die nat&uuml;rliche oder juristische
          Person, die allein oder gemeinsam mit anderen &uuml;ber die Zwecke und
          Mittel der Verarbeitung von personenbezogenen Daten (z.&nbsp;B. Namen,
          E-Mail-Adressen o. &Auml;.) entscheidet.
        </Typography>
        <Typography variant="h6" gutterBottom>
          Speicherdauer
        </Typography>
        <Typography variant="body1" gutterBottom>
          Soweit innerhalb dieser Datenschutzerkl&auml;rung keine speziellere
          Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten
          bei uns, bis der Zweck f&uuml;r die Datenverarbeitung entf&auml;llt.
          Wenn Sie ein berechtigtes L&ouml;schersuchen geltend machen oder eine
          Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten
          gel&ouml;scht, sofern wir keine anderen rechtlich zul&auml;ssigen
          Gr&uuml;nde f&uuml;r die Speicherung Ihrer personenbezogenen Daten
          haben (z.&nbsp;B. steuer- oder handelsrechtliche
          Aufbewahrungsfristen); im letztgenannten Fall erfolgt die
          L&ouml;schung nach Fortfall dieser Gr&uuml;nde.
        </Typography>
        <Typography variant="h6" gutterBottom>
          Allgemeine Hinweise zu den Rechtsgrundlagen der Datenverarbeitung auf
          dieser Website
        </Typography>
        <Typography variant="body1" gutterBottom>
          Sofern Sie in die Datenverarbeitung eingewilligt haben, verarbeiten
          wir Ihre personenbezogenen Daten auf Grundlage von Art. 6 Abs. 1 lit.
          a DSGVO bzw. Art. 9 Abs. 2 lit. a DSGVO, sofern besondere
          Datenkategorien nach Art. 9 Abs. 1 DSGVO verarbeitet werden. Im Falle
          einer ausdr&uuml;cklichen Einwilligung in die &Uuml;bertragung
          personenbezogener Daten in Drittstaaten erfolgt die Datenverarbeitung
          au&szlig;erdem auf Grundlage von Art. 49 Abs. 1 lit. a DSGVO. Sofern
          Sie in die Speicherung von Cookies oder in den Zugriff auf
          Informationen in Ihr Endger&auml;t (z.&nbsp;B. via
          Device-Fingerprinting) eingewilligt haben, erfolgt die
          Datenverarbeitung zus&auml;tzlich auf Grundlage von &sect; 25 Abs. 1
          TDDDG. Die Einwilligung ist jederzeit widerrufbar. Sind Ihre Daten zur
          Vertragserf&uuml;llung oder zur Durchf&uuml;hrung vorvertraglicher
          Ma&szlig;nahmen erforderlich, verarbeiten wir Ihre Daten auf Grundlage
          des Art. 6 Abs. 1 lit. b DSGVO. Des Weiteren verarbeiten wir Ihre
          Daten, sofern diese zur Erf&uuml;llung einer rechtlichen Verpflichtung
          erforderlich sind auf Grundlage von Art. 6 Abs. 1 lit. c DSGVO. Die
          Datenverarbeitung kann ferner auf Grundlage unseres berechtigten
          Interesses nach Art. 6 Abs. 1 lit. f DSGVO erfolgen. &Uuml;ber die
          jeweils im Einzelfall einschl&auml;gigen Rechtsgrundlagen wird in den
          folgenden Abs&auml;tzen dieser Datenschutzerkl&auml;rung informiert.
        </Typography>
        <Typography variant="h6" gutterBottom>
          Empfänger von personenbezogenen Daten
        </Typography>
        <Typography variant="body1" gutterBottom>
          Im Rahmen unserer Gesch&auml;ftst&auml;tigkeit arbeiten wir mit
          verschiedenen externen Stellen zusammen. Dabei ist teilweise auch eine
          &Uuml;bermittlung von personenbezogenen Daten an diese externen
          Stellen erforderlich. Wir geben personenbezogene Daten nur dann an
          externe Stellen weiter, wenn dies im Rahmen einer
          Vertragserf&uuml;llung erforderlich ist, wenn wir gesetzlich hierzu
          verpflichtet sind (z.&nbsp;B. Weitergabe von Daten an
          Steuerbeh&ouml;rden), wenn wir ein berechtigtes Interesse nach Art. 6
          Abs. 1 lit. f DSGVO an der Weitergabe haben oder wenn eine sonstige
          Rechtsgrundlage die Datenweitergabe erlaubt. Beim Einsatz von
          Auftragsverarbeitern geben wir personenbezogene Daten unserer Kunden
          nur auf Grundlage eines g&uuml;ltigen Vertrags &uuml;ber
          Auftragsverarbeitung weiter. Im Falle einer gemeinsamen Verarbeitung
          wird ein Vertrag &uuml;ber gemeinsame Verarbeitung geschlossen.
        </Typography>
        <Typography variant="h6" gutterBottom>
          Widerruf Ihrer Einwilligung zur Datenverarbeitung
        </Typography>
        <Typography variant="body1" gutterBottom>
          Viele Datenverarbeitungsvorg&auml;nge sind nur mit Ihrer
          ausdr&uuml;cklichen Einwilligung m&ouml;glich. Sie k&ouml;nnen eine
          bereits erteilte Einwilligung jederzeit widerrufen. Die
          Rechtm&auml;&szlig;igkeit der bis zum Widerruf erfolgten
          Datenverarbeitung bleibt vom Widerruf unber&uuml;hrt.
        </Typography>
        <Typography variant="h6" gutterBottom>
          Widerspruchsrecht gegen die Datenerhebung in besonderen F&auml;llen
          sowie gegen Direktwerbung (Art. 21 DSGVO)
        </Typography>
        <Typography variant="body1" gutterBottom>
          WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS. 1 LIT. E ODER
          F DSGVO ERFOLGT, HABEN SIE JEDERZEIT DAS RECHT, AUS GR&Uuml;NDEN, DIE
          SICH AUS IHRER BESONDEREN SITUATION ERGEBEN, GEGEN DIE VERARBEITUNG
          IHRER PERSONENBEZOGENEN DATEN WIDERSPRUCH EINZULEGEN; DIES GILT AUCH
          F&Uuml;R EIN AUF DIESE BESTIMMUNGEN GEST&Uuml;TZTES PROFILING. DIE
          JEWEILIGE RECHTSGRUNDLAGE, AUF DENEN EINE VERARBEITUNG BERUHT,
          ENTNEHMEN SIE DIESER DATENSCHUTZERKL&Auml;RUNG. WENN SIE WIDERSPRUCH
          EINLEGEN, WERDEN WIR IHRE BETROFFENEN PERSONENBEZOGENEN DATEN NICHT
          MEHR VERARBEITEN, ES SEI DENN, WIR K&Ouml;NNEN ZWINGENDE
          SCHUTZW&Uuml;RDIGE GR&Uuml;NDE F&Uuml;R DIE VERARBEITUNG NACHWEISEN,
          DIE IHRE INTERESSEN, RECHTE UND FREIHEITEN &Uuml;BERWIEGEN ODER DIE
          VERARBEITUNG DIENT DER GELTENDMACHUNG, AUS&Uuml;BUNG ODER VERTEIDIGUNG
          VON RECHTSANSPR&Uuml;CHEN (WIDERSPRUCH NACH ART. 21 ABS. 1 DSGVO).
        </Typography>
        <Typography variant="body1" gutterBottom>
          WERDEN IHRE PERSONENBEZOGENEN DATEN VERARBEITET, UM DIREKTWERBUNG ZU
          BETREIBEN, SO HABEN SIE DAS RECHT, JEDERZEIT WIDERSPRUCH GEGEN DIE
          VERARBEITUNG SIE BETREFFENDER PERSONENBEZOGENER DATEN ZUM ZWECKE
          DERARTIGER WERBUNG EINZULEGEN; DIES GILT AUCH F&Uuml;R DAS PROFILING,
          SOWEIT ES MIT SOLCHER DIREKTWERBUNG IN VERBINDUNG STEHT. WENN SIE
          WIDERSPRECHEN, WERDEN IHRE PERSONENBEZOGENEN DATEN ANSCHLIESSEND NICHT
          MEHR ZUM ZWECKE DER DIREKTWERBUNG VERWENDET (WIDERSPRUCH NACH ART. 21
          ABS. 2 DSGVO).
        </Typography>
        <Typography variant="h6" gutterBottom>
          Beschwerde&shy;recht bei der zust&auml;ndigen
          Aufsichts&shy;beh&ouml;rde
        </Typography>
        <Typography variant="body1" gutterBottom>
          Im Falle von Verst&ouml;&szlig;en gegen die DSGVO steht den
          Betroffenen ein Beschwerderecht bei einer Aufsichtsbeh&ouml;rde,
          insbesondere in dem Mitgliedstaat ihres gew&ouml;hnlichen Aufenthalts,
          ihres Arbeitsplatzes oder des Orts des mutma&szlig;lichen
          Versto&szlig;es zu. Das Beschwerderecht besteht unbeschadet
          anderweitiger verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.
        </Typography>
        <Typography variant="h6" gutterBottom>
          Recht auf Daten&shy;&uuml;bertrag&shy;barkeit
        </Typography>
        <Typography variant="body1" gutterBottom>
          Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung
          oder in Erf&uuml;llung eines Vertrags automatisiert verarbeiten, an
          sich oder an einen Dritten in einem g&auml;ngigen, maschinenlesbaren
          Format aush&auml;ndigen zu lassen. Sofern Sie die direkte
          &Uuml;bertragung der Daten an einen anderen Verantwortlichen
          verlangen, erfolgt dies nur, soweit es technisch machbar ist.
        </Typography>
        <Typography variant="h6" gutterBottom>
          Auskunft, Berichtigung und L&ouml;schung
        </Typography>
        <Typography variant="body1" gutterBottom>
          Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit
          das Recht auf unentgeltliche Auskunft &uuml;ber Ihre gespeicherten
          personenbezogenen Daten, deren Herkunft und Empf&auml;nger und den
          Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder
          L&ouml;schung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema
          personenbezogene Daten k&ouml;nnen Sie sich jederzeit an uns wenden.
        </Typography>
        <Typography variant="h6" gutterBottom>
          Recht auf Einschr&auml;nkung der Verarbeitung
        </Typography>
        <Typography variant="body1" gutterBottom>
          Sie haben das Recht, die Einschr&auml;nkung der Verarbeitung Ihrer
          personenbezogenen Daten zu verlangen. Hierzu k&ouml;nnen Sie sich
          jederzeit an uns wenden. Das Recht auf Einschr&auml;nkung der
          Verarbeitung besteht in folgenden F&auml;llen:
        </Typography>
        <List dense={true}>
          <ListItem>
            <ListItemIcon>
              <ArrowRightIcon />
            </ListItemIcon>
            <ListItemText
              primary="Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten
              personenbezogenen Daten bestreiten, ben&ouml;tigen wir in der
              Regel Zeit, um dies zu &uuml;berpr&uuml;fen. F&uuml;r die Dauer
              der Pr&uuml;fung haben Sie das Recht, die Einschr&auml;nkung der
              Verarbeitung Ihrer personenbezogenen Daten zu verlangen."
            ></ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <ArrowRightIcon />
            </ListItemIcon>
            <ListItemText
              primary="Wenn die Verarbeitung Ihrer personenbezogenen Daten
            unrechtm&auml;&szlig;ig geschah/geschieht, k&ouml;nnen Sie statt der
            L&ouml;schung die Einschr&auml;nkung der Datenverarbeitung
            verlangen."
            ></ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <ArrowRightIcon />
            </ListItemIcon>
            <ListItemText
              primary="Wenn wir Ihre personenbezogenen Daten nicht mehr ben&ouml;tigen, Sie
            sie jedoch zur Aus&uuml;bung, Verteidigung oder Geltendmachung von
            Rechtsanspr&uuml;chen ben&ouml;tigen, haben Sie das Recht, statt der
            L&ouml;schung die Einschr&auml;nkung der Verarbeitung Ihrer
            personenbezogenen Daten zu verlangen."
            ></ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <ArrowRightIcon />
            </ListItemIcon>
            <ListItemText
              primary="Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt
            haben, muss eine Abw&auml;gung zwischen Ihren und unseren Interessen
            vorgenommen werden. Solange noch nicht feststeht, wessen Interessen
            &uuml;berwiegen, haben Sie das Recht, die Einschr&auml;nkung der
            Verarbeitung Ihrer personenbezogenen Daten zu verlangen."
            ></ListItemText>
          </ListItem>
        </List>
        <Typography variant="body1" gutterBottom>
          Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten
          eingeschr&auml;nkt haben, d&uuml;rfen diese Daten &ndash; von ihrer
          Speicherung abgesehen &ndash; nur mit Ihrer Einwilligung oder zur
          Geltendmachung, Aus&uuml;bung oder Verteidigung von
          Rechtsanspr&uuml;chen oder zum Schutz der Rechte einer anderen
          nat&uuml;rlichen oder juristischen Person oder aus Gr&uuml;nden eines
          wichtigen &ouml;ffentlichen Interesses der Europ&auml;ischen Union
          oder eines Mitgliedstaats verarbeitet werden.
        </Typography>
        <Typography variant="h5" gutterBottom>
          4. Plugins und Tools
        </Typography>
        <Typography variant="h6" gutterBottom>
          OpenStreetMap
        </Typography>
        <p>Wir nutzen den Kartendienst von OpenStreetMap (OSM).</p>
        <Typography variant="body1" gutterBottom>
          Wir binden das Kartenmaterial von OpenStreetMap auf dem Server der
          OpenStreetMap Foundation, St John&rsquo;s Innovation Centre, Cowley
          Road, Cambridge, CB4 0WS, Gro&szlig;britannien, ein.
          Gro&szlig;britannien gilt als datenschutzrechtlich sicherer
          Drittstaat. Das bedeutet, dass Gro&szlig;britannien ein
          Datenschutzniveau aufweist, das dem Datenschutzniveau in der
          Europ&auml;ischen Union entspricht. Bei der Nutzung der
          OpenStreetMap-Karten wird eine Verbindung zu den Servern der
          OpenStreetMap-Foundation hergestellt. Dabei k&ouml;nnen u.&nbsp;a.
          Ihre IP-Adresse und weitere Informationen &uuml;ber Ihr Verhalten auf
          dieser Website an die OSMF weitergeleitet werden. OpenStreetMap
          speichert hierzu unter Umst&auml;nden Cookies in Ihrem Browser oder
          setzt vergleichbare Wiedererkennungstechnologien ein.
        </Typography>
        <Typography variant="body1" gutterBottom>
          Die Nutzung von OpenStreetMap erfolgt im Interesse einer ansprechenden
          Darstellung unserer Online-Angebote und einer leichten Auffindbarkeit
          der von uns auf der Website angegebenen Orte. Dies stellt ein
          berechtigtes Interesse im Sinne von Art. 6 Abs. 1 lit. f DSGVO dar.
          Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die
          Verarbeitung ausschlie&szlig;lich auf Grundlage von Art. 6 Abs. 1 lit.
          a DSGVO und &sect; 25 Abs. 1 TDDDG, soweit die Einwilligung die
          Speicherung von Cookies oder den Zugriff auf Informationen im
          Endger&auml;t des Nutzers (z.&nbsp;B. Device-Fingerprinting) im Sinne
          des TDDDG umfasst. Die Einwilligung ist jederzeit widerrufbar.
        </Typography>
        <Typography variant="body1" gutterBottom>
          Quelle:{" "}
          <Link href="https://www.e-recht24.de">https://www.e-recht24.de</Link>
        </Typography>
      </Paper>
    </Container>
  );
}
